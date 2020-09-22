var overlay = document.createElement("div");
overlay.setAttribute('id', 'overlay');
var oImg = document.createElement("img");
oImg.setAttribute('src', 'https://b1.pngbarn.com/png/67/749/orange-stream-overlay-png-clip-art.png');
oImg.setAttribute('alt', 'na');
oImg.setAttribute('height', '0%');
oImg.setAttribute('width', '0%]');
overlay.appendChild(oImg);

document.body.appendChild(overlay);

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
