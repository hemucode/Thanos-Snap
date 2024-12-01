var app = {}, API = chrome || browser,$ = (ele) =>{return document.querySelector(ele)};
 
API.runtime.sendMessage(
  {
    action: "PAGE_READY",
  },
  ({ remove , cursor, style}) => {
    if (remove) {
      document.addEventListener('click', function(event) {
        if (event.target.tagName !== 'BODY') { // Prevent clicking on the body itself
          event.target.remove(); 
        }
      });
    }
    cursor ? app.cursor() : null;
    style ? app.style() : null;    
  }
);

app.cursor = function () {
  if (!$("body")) return void setTimeout((() => {
        app.cursor();
  }), 100);
  newCssContent =`body{cursor: url('${chrome.runtime.getURL("data/icons/arrows.png")}'), auto !important} 
  a:hover,button:hover,select:hover{cursor: url('${chrome.runtime.getURL("data/icons/arrows_pointer.png")}'), auto !important}`;
  if (!$("#culser-selectors")) {
    let styleElement = document.createElement("style");
    styleElement.id = "culser-selectors",
    styleElement.appendChild(document.createTextNode(newCssContent)), 
    $("body").appendChild(styleElement);
  }
}

app.style = function() {
  for(ele of document.querySelectorAll("style")) {
    ele.id == "culser-selectors" ? null : ele.remove();
  }
}