//version 11
var vintage_radio = document.getElementById('vintage_radio');

if(Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource('https://hls.rastream.com/vintageradiosg-vintage.web.hls/playlist.m3u8?authtoken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvaWQiOiJsYXlsaW8iLCJpYXQiOjE2MDQwMjE3OTgsImV4cCI6MTYwNDEwODE5OH0.wARGspn6fo1rvOhjLH07qE3zoJAMhP0IISDCYiYHSUE');
  hls.attachMedia(vintage_radio);
  hls.on(Hls.Events.MANIFEST_PARSED,function() {
    vintage_radio.play();
    document.addEventListener('radio_volumeChange', function(e) {
      vintage_radio.volume = e;
    });
  });
}
