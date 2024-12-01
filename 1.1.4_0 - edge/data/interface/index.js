var app = {}, API = chrome || browser,$ = (ele) =>{return document.querySelector(ele)};

app.action = {
  "link": function() {
  	$("#rate_us") ? $("#rate_us").href = `https://microsoftedge.microsoft.com/addons/detail/${API.runtime.id}` : null;
  },
  "translate": function() {
    return new Promise((resolve) => {
      const elements = document.querySelectorAll("[data-message]");
      for (const element of elements) {
        const key = element.dataset.message;
        const message = API.i18n.getMessage(key);
        if (message) {
          element.textContent = message;
        } else {
          console.error("Missing API.i18n message:", key);
        }
      }
      resolve();
    });
  },
  "hydrate": async function() {
    const options = await API.storage.local.get({
      removeinclick: true,
      thanoscursor: false,
      nostylesheet: false,
    });

    for (const [key, value] of Object.entries(options)) {
      const $checkbox = $(`input[name=${key}]`);
      $checkbox.checked = value;
      $checkbox.addEventListener("change", async (event) => {
        await API.storage.local.set({
          [event.target.name]: event.target.checked,
        });
      });
    }
  }
}

const domReady = (callback)=> {
  if (document.readyState === 'complete') {
    callback()
  } else {
    window.addEventListener('load', callback, false);
  }
}

domReady(() => {
  app.action.translate()
  app.action.hydrate()
  app.action.link()
})