const mySym = Symbol("key1")
const jsUser={
    name:"Ruma",
    "full name":"Ruma Ghosh", 
    [mySym]:"mykey1",
    age:19,
    location:"jharkhand",
    email:"sophia999cardiogmail.com",
    isLoggedIn:  false,
    lastLogindays:["Monday","saturday"]
}
console.log(jsUser.name)
console.log(jsUser.location)
console.log(jsUser.email)
console.log(jsUser["full name"])
console.log(typeof jsUser.mySym)
console.log(jsUser[mySym])
jsUser.email = "ghoshruma174gmail.com"
Object.freeze(jsUser)
jsUser.email="rumagoogle.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log(`hello js user, ${this.name}`); 
}
console.log(jsUser.greeting());
console.log(jsUser.greeting);