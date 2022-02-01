// routes

module.exports = function(app){
    const controller = require("./Controller/User");
    app.route("/").get(controller.index);

}