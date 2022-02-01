'use strict';

// connect to db
const db = require("../database/connect");

// layouts
const layout = "layouts/User";


// logic
exports.index = function(req,res){
    // res.send("hello world");
    res.render("User/dashboard",{
        layout : layout
    });
}

// get All data
exports.getAll = function(req,res){
    const sql = "SELECT * FROM parkir";

    const result = db.query(sql,(err,results,fields)=> {
        if(err) throw err;

        res.json({value : results});

        res.end();
    })

    
}


// dwonload
exports.dwonload = function(req,res){
    // res.download("/dwonload/mobile.png","tes.png");
    // res.download(__dirname + "")
    res.download("./public/img/mobile.png");
}