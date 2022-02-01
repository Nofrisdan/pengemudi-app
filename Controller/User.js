'use strict';


// connect to db

// layouts
const layout = "layouts/User";


// logic
exports.index = function(req,res){
    // res.send("hello world");
    res.render("User/dashboard",{
        layout : layout
    });
    
}