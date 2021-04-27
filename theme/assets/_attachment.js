import baguetteBox from './baguetteBox.js';

const filter = /.+\.(gif|jpe?g|png|webp)|file\.php\?id=\d+$/i;
const ignoreClass = 'mdt-attachment-download';

baguetteBox.run('.mdt-grid-view', { filter, ignoreClass })
baguetteBox.run(':not(.mdt-grid-view) > .inline-attachment .mdt-attachment-image', {
  filter,
  ignoreClass
});
