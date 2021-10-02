const express = require("express");
const ejs = require("ejs");

const homeStartingContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem nesciunt odit obcaecati temporibus quisquam quod enim sapiente libero dolor quam repudiandae, sequi, excepturi consequatur rerum laudantium quo, nihil in architecto."
const aboutContent = "About Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem nesciunt odit obcaecati temporibus quisquam quod enim sapiente libero dolor quam repudiandae, sequi, excepturi consequatur rerum laudantium quo, nihil in architecto."
const contactContent = "Contact Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem nesciunt odit obcaecati temporibus quisquam quod enim sapiente libero dolor quam repudiandae, sequi, excepturi consequatur rerum laudantium quo, nihil in architecto."

const app =express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render("home.ejs");
})

// git ignor add.

app.listen(3000, function(){
    console.log("Server started on port 3000");
})