var overlay = document.createElement("div");
overlay.setAttribute('id', 'overlay');
var oImg = document.createElement("img");
oImg.setAttribute('src', 'https://static.wixstatic.com/media/1f48bb_aefbcee9a76d482d9a99fe58bb43505b~mv2.png');
oImg.setAttribute('alt', 'na');
oImg.setAttribute('height', '100%');
oImg.setAttribute('width', '100%');
overlay.appendChild(oImg);

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  document.body.appendChild(overlay);
} 



var frameBG = document.createElement("div");
frameBG.setAttribute('id', 'frameBG');
var intframe = document.createElement("div");
intframe.setAttribute('id', 'intframe');

var animframe = document.createElement("iframe");
animframe.setAttribute('src', '');
animframe.style = "border-width: 0px; pointer-events : none; max-height: var(--sessionstart);"
animframe.setAttribute('height', '560px');
animframe.setAttribute('width', '100%');

var error = document.createElement('div');
error.setAttribute('id', 'error1');
document.body.appendChild(error);

var map = new Map();

//map.set('HP Amplify ','https://youtu.be/diUaNndYgXQ?start=');
map.set('HP','https://www.youtube.com/embed/4ASKMcdCc3g?start=');

error.setAttribute('id', 'error2');


function checkchange(){
    
var postimg = document.querySelector('[class*="PostSessionView_image__"]');
if(postimg){
var postimg_tar = postimg.parentNode.parentNode.previousElementSibling.lastChild.lastChild;
postimg_tar.style = "display : none;";
}
       
FullscreenTest();
    
var obj = document.getElementById("frameBG");
if(obj)return;
	
link = '';

var buttonadded = document.getElementById("buttonAdded");
if(buttonadded)return;

//check if its timeline
var timeline = document.querySelectorAll("div[class^='Advertisement_root__']");
if(timeline.length > 0){
    //if it is timeline
    var top = timeline[0].parentNode;
    
    var text_1 = document.createElement("p");
    text_1.innerHTML = "Sessions can be accessed from 1 December 2020 only"
    text_1.style = "color : white; padding-top : 20px";
    top.appendChild(text_1);
    
    var text_2 = document.createElement("p");
    text_2.innerHTML = "2020년 12월 1일부터 세션에 액세스할 수 있습니다."
    text_2.style = "color : white ";
    top.appendChild(text_2);
    
    var text_3 = document.createElement("p");
    text_3.innerHTML = "セッションには2020年12月1日以降にのみアクセスできます"
    text_3.style = "color : white ";
    top.appendChild(text_3);
    
    var text_4 = document.createElement("p");
    text_4.innerHTML = "Please submit any questions you'd like us to address before the event starts " + '<a href="https://www.google.com" style="color:yellow ; "' + ' target="_blank" ' +  '>here</a>';
    text_4.style = "color : white ";
    //top.appendChild(text_1);
    top.appendChild(text_4);
    
    var text_5 = document.createElement("p");
    text_5.innerHTML = "라이브 Q&A 세션에서 질문하실 내용이 있는 경우, 행사 시작 전에 " + '<a href="https://www.google.com" style="color:yellow ; "' + ' target="_blank" ' +  '> 여기에 </a>' + " 올려주시기 바랍니다.";
    text_5.style = "color : white ";
    
    top.appendChild(text_5);
    
    var text_6 = document.createElement("p");
    text_6.innerHTML = "イベント開始前のライブQ&Aでお尋ねになりたいことがありましたら、"+ '<a href="https://www.google.com" style="color:yellow ; "' + ' target="_blank" ' +  '> こちら </a>' + " からお寄せください" ;
    text_6.style = "color : white ";
    
    top.appendChild(text_6);
    
    var target = timeline[0].parentNode.nextElementSibling.firstElementChild;
    target.style ="height: 80px; cursor: pointer; background-image: url('https://raw.githubusercontent.com/Lucas101010/TestSpace/master/besticando2.jpg');  background-repeat: no-repeat;background-size: 100% 100%;";
    target.setAttribute('id', 'buttonAdded');
//return;
    target.addEventListener("mousedown", function(){
        var win = window.open("https://www.hpamplify2021.com/agenda", '_blank');
        win.focus();
    }); 
    return;
}


//check if its session page
var sources= document.querySelectorAll("span[class^='Typography_medium18__']");
if(sources.length == 0) return;
	
var text = sources[0].innerHTML;
//error.setAttribute('text',text);
for (let key of map.keys()) {
  var foundIndex = text.indexOf(key);
  //error.setAttribute('index',foundIndex);
  if(foundIndex == 0){
   link = map.get(key);
   //error.setAttribute('src', link);
   break;
  }
}

error.setAttribute('id', 'error3');


var source = document.querySelectorAll("div[class^='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8'] > div[class^='MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column MuiGrid-wrap-xs-nowrap'] > div[class^='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true'] > div[class^='MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column MuiGrid-wrap-xs-nowrap']");


error.setAttribute('id', 'error3.5');

if(source.length > 0){
	
  var d = new Date();
  var offsec = (60*d.getMinutes()) + d.getSeconds() - (20*60);
  
	error.setAttribute('id', 'error3.9');
	animframe.setAttribute('src', link + offsec + "&autoplay=1&controls=0");
  animframe.setAttribute('allow',"autoplay");
	intframe.appendChild(animframe);
	frameBG.appendChild(intframe);
	source[0].prepend(frameBG);
} 
}

window.setInterval(function(){
	checkchange();
}, 1000);



function FullscreenTest(){
    var utube = document.querySelectorAll('iframe');
    if(utube.length == 0) return;
    var oldvid = utube[0].src;
    
    if(oldvid.includes('&fs=0')){
        var newvid = oldvid.replace('&fs=0','');
        //utube[0].src = newvid;
    }
}

document.addEventListener('keydown', function(event) {
if(event.keyCode == 113){
    FullscreenTest();
    
}

});

var icon1 = document.querySelector('link[rel*="icon"]');
icon1.href = "https://raw.githack.com/Lucas101010/TestSpace/master/Hpicon.ico";
var icon2 = document.querySelector('link[rel*="apple-touch-icon"]');
icon2.href = "https://raw.githack.com/Lucas101010/TestSpace/master/Hp Logo Blue.png";
document.title = "HP Amplify";


var vidBG = document.createElement("img");
vidBG.setAttribute('id', 'videoBG');
vidBG.setAttribute('src', 'https://raw.githubusercontent.com/Lucas101010/TestSpace/master/black_bg.gif');
vidBG.setAttribute('height', '100%');
vidBG.setAttribute('width', '100%');
vidBG.setAttribute('style', 'object-fit: cover;');
document.body.appendChild(vidBG);

var temp = window.innerHeight;
document.documentElement.style.setProperty("--fullmaxheight", (temp-25) + "px");
document.documentElement.style.setProperty("--minimaxheight", "500 px");
document.documentElement.style.setProperty("--sessionend", "500 px");
document.documentElement.style.setProperty("--sessionstart", "500 px");

window.addEventListener('resize',function(e){
var elem_free= document.getElementById("videoBG");
var testDiv = document.querySelector('[class*="aspect-width"]');
if(elem_free){
var free_val = elem_free.offsetHeight;
    document.documentElement.style.setProperty("--fullmaxheight", (free_val-25) + "px");
if(testDiv){
document.documentElement.style.setProperty('--minimaxheight',(free_val -250) + "px");
error.setAttribute('index', testDiv.offsetTop);
}
document.documentElement.style.setProperty('--sessionend',(free_val -250) + "px");
document.documentElement.style.setProperty('--sessionstart',(free_val -250) + "px");
}
});


function checkreso(){
    var elem_free= document.getElementById("videoBG");
var testDiv = document.querySelector('[class*="aspect-width"]');
if(elem_free){
var free_val = elem_free.offsetHeight;
    document.documentElement.style.setProperty("--fullmaxheight", (free_val-25) + "px");
if(testDiv){
document.documentElement.style.setProperty('--minimaxheight',(free_val -250) + "px");
}
document.documentElement.style.setProperty('--sessionend',(free_val -250) + "px");
document.documentElement.style.setProperty('--sessionstart',(free_val -250) + "px");
}
}

window.setInterval(function(){
	checkreso();
}, 5000);