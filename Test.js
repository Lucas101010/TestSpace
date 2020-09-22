alert("This website is best viewed in Landscape");

var overlay = document.createElement("div");
overlay.setAttribute('id', 'overlay');
var oImg = document.createElement("img");
oImg.setAttribute('src', 'https://r1.ilikewallpaper.net/iphone-wallpapers/download/78275/Sea-foam-iphone-wallpaper-ilikewallpaper_com.jpg');
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
