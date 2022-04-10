import { findAfter } from 'unist-util-find-after';
import { visitParents, SKIP } from 'unist-util-visit-parents';

const addThematicBreaks = () => (tree) => {
  visitParents(tree, node => node.type === 'heading' && node.depth < 3, (node, ancestors) => {
    const parent = ancestors[ancestors.length - 1];
    const nodeIndex = parent.children.indexOf(node);
    const prevIsBreak = parent.children[nodeIndex - 1].type === 'thematicBreak';
    const nextIsBreak = parent.children[nodeIndex + 1].type === 'thematicBreak';

    if (node.depth === 1 && nextIsBreak) return SKIP;
    if (node.depth === 2 && prevIsBreak) return SKIP;

    parent.children = [
      ...parent.children.slice(0, nodeIndex + 2 - node.depth),
      {type: 'thematicBreak'},
      ...parent.children.slice(nodeIndex + 2 - node.depth)
    ];

  });
};

// based on @jake-low/remark-sectionize
// check it out here https://github.com/jake-low/remark-sectionize
const sectionizeByThematicBreak = () => (tree) => {
  visitParents(tree, 'thematicBreak', (node, ancestors) => {
    const parent = ancestors[ancestors.length - 1];

    const end = findAfter(
      parent,
      node,
      ({ type }) => type === 'thematicBreak' || type === 'export'
    );

    const startIndex = parent.children.indexOf(node);
    const endIndex = parent.children.indexOf(end);

    const children = parent.children.slice(
      startIndex,
      endIndex > 0 ? endIndex : undefined
    );

    const section = {
      type: `section`,
      children,
      data: {
        hName: `section`,
      },
    };

    parent.children.splice(startIndex, children.length, section);
  });
};

export const thematicBreakLayout = [
  // order matters here
  addThematicBreaks,
  sectionizeByThematicBreak
]