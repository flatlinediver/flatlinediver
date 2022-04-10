import { findAfter } from 'unist-util-find-after';
import { visitParents } from 'unist-util-visit-parents';

export const sectionizeByHR = () => (tree) => {
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
