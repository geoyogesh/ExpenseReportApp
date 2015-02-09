(function (Controller) {
    var homeController = require("./homeController.js");

    Controller.init = function (app) {
        homeController.init(app);
    };
})(module.exports);