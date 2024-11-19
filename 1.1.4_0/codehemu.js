var $$ = function(ele) {return document.querySelectorAll(ele)};   
const randomArray = (ele) =>{
      var arr = [], len = ele.length, total_len = Math.floor(ele.length / 3);
      while(arr.length < total_len){
          var r = Math.floor(Math.random() * len) + 1;
          if(arr.indexOf(r) === -1) arr.push(r);
      }
      return arr;   
}

const load = () =>{
      elements = ["img", "a","span","p","video","svg"];
      for (ele of elements){remove(ele)}
      audioPlay("snap.mp3");
}

const remove = (ele) =>{
     for (a of randomArray($$(ele))){
            $$(ele)[a] ? $$(ele)[a].style.display = "none" : null;
      } 
}

load();

const audioPlay = (path)=>{
      // var myAudio = new Audio();
      // myAudio.src = new Audio(chrome.runtime.getURL(path));
      // myAudio.play();
      console.log(new Audio(chrome.runtime.getURL(path)))
}


   
          
