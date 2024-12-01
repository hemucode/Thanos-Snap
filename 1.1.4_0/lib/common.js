var core = {
  "start": function () {
    core.load();
  },
  "install": function () {
    core.load();
  },
  "load": function () {
    if(config.remove()){
      app.action.set.icon({
        48: "data/icons/48.png",
        64: "data/icons/64.png",
        128: "data/icons/128.png"
      });
    }else{
      app.action.set.icon({
        48: "data/icons/48-disabled.png",
        64: "data/icons/64-disabled.png",
        128: "data/icons/128-disabled.png"
      });
    }
  },
  "action": {
    "storage": function (changes, namespace) {
      if (namespace !== "local") return;
      app.tab.reload();
      if (changes.removeinclick) {
        if (changes.removeinclick.newValue) {
          app.action.set.icon({
            48: "data/icons/48.png",
            64: "data/icons/64.png",
            128: "data/icons/128.png"
          });
        }else{
          app.action.set.icon({
            48: "data/icons/48-disabled.png",
            64: "data/icons/64-disabled.png",
            128: "data/icons/128-disabled.png"
          });
        }
      }
    },
    "message": function({ action, href, message }, { tab }, sendResponse) {
      if (action === "PAGE_READY") {
        const response = {
          remove: config.remove(),
          cursor: config.cursor(),
          style: config.style()
        };
        sendResponse(response);
      }
    }
  }
};

app.on.startup(core.start);
app.on.installed(core.install);
app.on.storage(core.action.storage);
app.on.message(core.action.message);
