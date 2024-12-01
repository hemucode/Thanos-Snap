var config = {};

config.remove = function() {return app.storage.read("removeinclick") !== undefined ? app.storage.read("removeinclick") : true}
config.cursor = function() {return app.storage.read("thanoscursor") !== undefined ? app.storage.read("thanoscursor") : false}
config.style = function() {return app.storage.read("nostylesheet") !== undefined ? app.storage.read("nostylesheet") : false}

