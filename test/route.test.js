// Run: node test/route.test.js
const assert = require('assert');
const { pickStore, cleanSource, playUrl } = require('../gloopath/route.js');

const UA = {
  iphoneSafari: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1',
  iphoneInstagram: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 350.0.0.0.0',
  ipadDesktopMode: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Safari/605.1.15',
  androidChrome: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36',
  androidTikTok: 'Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/120.0.0.0 Mobile Safari/537.36 musical_ly_2023',
  windowsChrome: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  macSafari: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Safari/605.1.15',
};

assert.strictEqual(pickStore(UA.iphoneSafari, 5), 'apple');
assert.strictEqual(pickStore(UA.iphoneInstagram, 5), 'apple');
assert.strictEqual(pickStore(UA.ipadDesktopMode, 5), 'apple');   // iPad in desktop mode
assert.strictEqual(pickStore(UA.androidChrome, 5), 'google');
assert.strictEqual(pickStore(UA.androidTikTok, 5), 'google');
assert.strictEqual(pickStore(UA.windowsChrome, 0), null);
assert.strictEqual(pickStore(UA.macSafari, 0), null);            // real Mac: both badges
assert.strictEqual(pickStore('', 0), null);
assert.strictEqual(pickStore(undefined, undefined), null);

assert.strictEqual(cleanSource('Instagram'), 'instagram');
assert.strictEqual(cleanSource('tiktok_ads-1'), 'tiktok_ads-1');
assert.strictEqual(cleanSource('a&b=c'), '');                     // no injection into the referrer
assert.strictEqual(cleanSource('<script>'), '');
assert.strictEqual(cleanSource('x'.repeat(31)), '');
assert.strictEqual(cleanSource(null), '');

const base = 'https://play.google.com/store/apps/details?id=com.berkcoappstudio.gloopath';
assert.strictEqual(playUrl(base, ''), base);
assert.strictEqual(playUrl(base, 'instagram'),
  base + '&referrer=utm_source%3Dinstagram%26utm_medium%3Dvideo%26utm_campaign%3Dgloopath');

console.log('route tests: all passed');
