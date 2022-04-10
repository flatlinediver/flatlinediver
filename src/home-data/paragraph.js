import { visitParents } from 'unist-util-visit-parents';
import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

export const removeBanner = () => (tree) => {
  visitParents(tree, node => node.type === 'paragraph', (node, ancestors) => {
    const bannerURL = `public/images/flatlinediver.png`;
    const parent = ancestors[ancestors.length - 1];
    const nodeIndex = parent.children.indexOf(node);

    const bannerParagraph = node.children.filter(c => c.url && c.url === bannerURL);

    if (bannerParagraph.length) {
      parent.children.splice(nodeIndex, 1);
    }

  });
};

export const lastNote = () => (tree) => {
  visit(tree, 'paragraph', (node) => {

    if (!node.children.some(c => c.value && c.value.includes('last note:'))) return;

    const data = node.data || (node.data = {});
    data.hProperties = {...h('p', node.attributes).properties, lastNote: true};

  });
};

export const paragraph = [
  removeBanner,
  lastNote
];
