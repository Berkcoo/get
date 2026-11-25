// Gloopath download link: picks the store for the visitor's device.
// Pure functions so they can be tested with node (see ../test/route.test.js).
(function (root) {
  'use strict';

  // 'apple' | 'google' | null (desktop or unknown: show both badges).
  function pickStore(ua, touchPoints) {
    ua = ua || '';
    if (/android/i.test(ua)) return 'google';
    if (/iPhone|iPad|iPod/.test(ua)) return 'apple';
    // iPadOS 13+ in desktop mode reports a Mac user agent but has a touch screen.
    if (/Macintosh/.test(ua) && touchPoints > 1) return 'apple';
    return null;
  }

  // Source tag from ?s=instagram etc. Only letters, digits, - and _ survive.
  function cleanSource(s) {
    s = String(s || '').toLowerCase();
    return /^[a-z0-9_-]{1,30}$/.test(s) ? s : '';
  }

  // Google Play install referrer: shows up in Play Console acquisition reports.
  function playUrl(base, source) {
    if (!source) return base;
    var ref = 'utm_source=' + source + '&utm_medium=video&utm_campaign=gloopath';
    return base + '&referrer=' + encodeURIComponent(ref);
  }

  var api = { pickStore: pickStore, cleanSource: cleanSource, playUrl: playUrl };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.GloopathRoute = api;
})(this);
