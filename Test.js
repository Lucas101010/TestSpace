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
oVid.setAttribute('src', 'https://raw.githack.com/Lucas101010/TestSpace/master/Bg.mp4');
oVid.setAttribute('height', '100%');
oVid.setAttribute('width', '100%');
oVid.setAttribute('muted', 'true');
oVid.setAttribute('style', 'object-fit: cover;');
vidBG.appendChild(oVid);
document.body.appendChild(vidBG);

var myVideo = document.getElementById("myVid");
myVideo.muted = true;
myVideo.loop = true;
myVideo.play();


var frameBG = document.createElement("div");
frameBG.setAttribute('id', 'frameBG');
var intframe = document.createElement("div");
intframe.setAttribute('id', 'intframe');

var animframe = document.createElement("iframe");
animframe.setAttribute('src', '');
animframe.setAttribute('height', '80%');
animframe.setAttribute('width', '100%');
animframe.setAttribute('top', '10%');

intframe.appendChild(animframe);
frameBG.appendChild(intframe);
document.body.appendChild(frameBG);

var intbtn = document.createElement("div");
intbtn.setAttribute('id', 'intbtn');
document.body.appendChild(intbtn);


var open = false;
var link = '';

intbtn.addEventListener("mousedown", function(){
	
	if(link == ''){
link = 'https://storage.net-fs.com/hosting/6581261/0/index.htm';
animframe.setAttribute('src', link);
}
	if(open){
  	frameBG.setAttribute("style", "opacity:0.0; pointer-events:none;");
	}
	else{
	frameBG.setAttribute("style", "opacity:1.0; pointer-events:auto;");
	}
    open = !open;
});
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
