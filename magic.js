console.log("Extension running");
let paragraph = document.getElementsByTagName("p");
for(let i of paragraph){
    i.style['background-color']='green';
}
if(document.getElementsByTagName('h1') && document.getElementsByTagName('h1').length>0){
    document.getElementsByTagName('h1')[0]['style']['display'] = 'none';
}

//document.getElementsByTagName("img").src='';
let imgsrc = document.getElementsByTagName("img");
for (let i of imgsrc){
    let imgFile = 'image/rose.jpg';
    i.src = chrome.extension.getURL(imgFile);
}

//var headingtag = document.querySelectorAll("h1");

//h1 remove
//change remove