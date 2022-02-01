// routes

module.exports = function(app){
    const controller = require("./Controller/controller");

    app.route("/").get(controller.index);

}