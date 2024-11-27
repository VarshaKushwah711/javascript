import http from "http";
import fs from "fs";

let home = fs.createReadStream("home.html");
let myhome = "";
home.on("data",(data) =>{
    myhome = myhome + data;
});
home.on("error", (error) =>{
    console.log(error.message)
});


let about = fs.createReadStream("about.html");
let myabout = "";
about.on("data",(data) =>{
    myabout = myabout + data;
});
about.on("error",(error) =>{
    console.log(error.message);
})


let contact = fs.createReadStream("contact.html");
let mycontact = "";
contact.on("data", (data) =>{
    mycontact = mycontact + data;
})
contact.on("error",(error) =>{
    console.log(error.message);
})



const server = http.createServer((request,response) =>
{
    if(request.url == "/")
    {
        response.write("server running");
        response.end();
    }
    else if(request.url == "/home"){
        response.write(myhome);
        response.end();
    }
    else if(request.url == "/about"){
        response.write(myabout);
        response.end();
    }
    else if(request.url == "/contact"){
        response.write(mycontact);
        response.end();
    }
    
    response.end();
}).listen(3000,(err) => {
    err ? console.log(err): console.log("Server is running on port 3000");
})
