const express = require("express"),
    layout = require("express-ejs-layouts"),
    port = 3000,
    app = express();


    // configure
    app.set("view engine","ejs");
    app.use(layout);
    app.set("layout","layout/layout");

    // static path
    


    // routes
    const routes = require("./routes");
    routes(app);


    // listen
    app.listen(port,() => {
        console.log("server active");
    })