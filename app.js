const express = require("express");
const _ = require("lodash");

const ejs = require("ejs");

const homeStartingContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem nesciunt odit obcaecati temporibus quisquam quod enim sapiente libero dolor quam repudiandae, sequi, excepturi consequatur rerum laudantium quo, nihil in architecto."
const aboutContent = "About Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem nesciunt odit obcaecati temporibus quisquam quod enim sapiente libero dolor quam repudiandae, sequi, excepturi consequatur rerum laudantium quo, nihil in architecto."
const contactContent = "Contact Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem nesciunt odit obcaecati temporibus quisquam quod enim sapiente libero dolor quam repudiandae, sequi, excepturi consequatur rerum laudantium quo, nihil in architecto."

const posts =[]; // this array has objects with two fields [{title: .... ,body: ... },{title: .... ,body: ... },...]

const app =express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.get('/post/:stringRequest', (req, res)=> {
    // console.log(req.params.stringRequest)
    
    // before compare change both variables to lowercase
    //  use node_modules "lodash" metod: _.lowerCase(str)
    
    const lowerCaseForStringRequest = _.lowerCase(req.params.stringRequest);

    const arrFoundPosts = [];

    posts.forEach((element)=>{

        const lowerCaseForTitleInArray = _.lowerCase(element.title);
        
        if (lowerCaseForTitleInArray===lowerCaseForStringRequest){

            const foundPost = {
                title: element.title ,
                body: element.body
            }

            arrFoundPosts.push(foundPost);
 
        }
    })

    if (arrFoundPosts.length === 0){
        const noFoundPost = {
            title: "No such post found" ,
            body: "You can write this post"
        }
        arrFoundPosts.push(noFoundPost);
    }


    res.render("post",{
        arrPosts:arrFoundPosts
    });
})



app.get("/",(req,res)=>{

    res.render("home",{
        paragraphHomePage:homeStartingContent,
        arrPosts:posts
    });
})

app.get("/about",(req,res)=>{
    res.render("about",{paragraphAboutPage:aboutContent});
})

app.get("/contact",(req,res)=>{
    res.render("contact",{paragraphContactPage:contactContent});
})

app.get("/compose",(req,res)=>{
    res.render("compose");
})

app.post("/compose",(req,res)=>{
   
    const newPost={
        "title": req.body.postTitle,    
        "body" : req.body.postBody  
    }

    posts.push(newPost);

    res.redirect("/");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
})
