function setUserName(username)
{
    console.log("set..");
    return this.username = username;
    
}
function createUser(username, email, password)
{
    //setUserName.call(this, username);
    setUserName(username);
    //this.username = username;
    this.email = email;
    this.password = password;
    console.log("create..")
}

const obj = new createUser("varsha", "varsha@gmail.com", 12345);
//obj.createUser();
console.log(obj);
