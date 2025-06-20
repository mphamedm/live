// دالة لتشغيل القناة باستخدام HLS.js
function playChannel(videoSrc) {
  const video = document.getElementById("video");
  const videoContainer = document.getElementById("video-container");

  if (Hls.isSupported()) {
    // إذا كان HLS مدعومًا، قم بتهيئة مكتبة HLS.js
    const hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    // إذا كان المتصفح يدعم HLS بشكل افتراضي (مثل Safari)
    video.src = videoSrc;
    video.addEventListener("loadedmetadata", function () {
      video.play();
    });
  } else {
    console.error("HLS not supported.");
    alert("عذرًا، تشغيل القنوات غير مدعوم في هذا المتصفح.");
  }

  // عرض مشغل الفيديو
  videoContainer.style.display = "block";
}
const express = require('express');
const request = require('request');
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  next();
});

app.get('/proxy', (req, res) => {
  request('http://m3u.tz-m3u.info/hil_586844/SAW3R8tl/272468').pipe(res);
});

app.listen(3000, () => console.log('Proxy running on port 3000'));
