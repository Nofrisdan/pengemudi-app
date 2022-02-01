// routes

module.exports = function(app){
    const controller = require("./Controller/User");
    app.route("/").get(controller.index);
    app.route("/getall").get(controller.getAll);
    app.route("/dwonload").get(controller.dwonload);
}

