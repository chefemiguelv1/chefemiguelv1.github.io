// Light copies of the photos (800px WebP in assets/img/sm/, 1400px in assets/img/md/).
// Thumbnails use sm(); big photos use srcset() so phones do not load the full file.
// The full photo is still what opens in the lightbox.
const to = (dir) => (p) => (p && p.startsWith('assets/img/') && !p.endsWith('.svg')
  ? 'assets/img/' + dir + '/' + p.slice(11).replace(/\.(png|jpe?g|webp)$/i, '.webp')
  : p);
export const sm = to('sm');
export const md = to('md');
export const srcset = (p, big) => sm(p) + ' 800w, ' + (big ? md(p) + ' 1400w, ' + p + ' 2000w' : p + ' 1600w');
