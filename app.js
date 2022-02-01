const express = require("express"),
    layout = require("express-ejs-layouts"),
    port = 3000,
    app = express();

    
    // configure
    app.set("view engine","ejs");
    app.use(layout);
    // app.set("layout","layout/layout");

    // static path
    app.use("/dp",express.static("./public/dp/"));
    app.use("/kn",express.static("./public/kn/"));
    // app.use("/dwonload",express.static("./public/img/"));
    
    // routes
    const routes = require("./routes");
    routes(app);

    // listen
    app.listen(port,() => {
        console.log("server active");
    })