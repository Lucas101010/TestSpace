var overlay = document.createElement("div");
overlay.setAttribute('id', 'overlay');
var oImg = document.createElement("img");
oImg.setAttribute('src', 'https://raw.githubusercontent.com/Lucas101010/TestSpace/master/overlay.png');
oImg.setAttribute('alt', 'na');
oImg.setAttribute('height', '100%');
oImg.setAttribute('width', '100%');
overlay.appendChild(oImg);
document.body.appendChild(overlay);

var vidBG = document.createElement("div");
vidBG.setAttribute('id', 'videoBG');
var oVid = document.createElement("VIDEO");
oVid.setAttribute('id', 'myVid');
oVid.setAttribute('src', 'https://www.w3schools.com/JSREF/movie.mp4');
oVid.setAttribute('height', '100%');
oVid.setAttribute('width', '100%');
oVid.setAttribute('muted', 'true');
vidBG.appendChild(oVid);
document.body.appendChild(vidBG);

var myVideo = document.getElementById("myVid");
myVideo.muted = true;
myVideo.loop = true;
myVideo.play();

var frameBG = document.createElement("div");
frameBG.setAttribute('id', 'frameBG');
var animframe = document.createElement("frameset");
animframe.setAttribute('rows', '100%');
animframe.setAttribute('border', '0');
var anim = document.createElement("frame");
anim.setAttribute('src', 'https://storage.net-fs.com/hosting/6581261/0/index.htm');
anim.setAttribute('frameborder', 0);
animframe.appendChild(anim);
frameBG.appendChild(animframe);
document.body.appendChild(frameBG);
/*

Old Orientation Change

if(window.innerHeight > window.innerWidth){
    //alert("This website is best viewed in Landscape");
    oImg.setAttribute('height', '100%');
    oImg.setAttribute('width', '100%');
}

window
    .matchMedia('(orientation: portrait)')
    .addListener(function (m) {
        if (m.matches) {
            // portrait
            //alert("This website is best viewed in Landscape");
            oImg.setAttribute('height', '100%');
            oImg.setAttribute('width', '100%');
            
        } else {
            oImg.setAttribute('height', '0%');
            oImg.setAttribute('width', '0%');
            // landscape
            
        }
    });
*/
