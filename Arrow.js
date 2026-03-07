// const user={
//     username: "ruma",
//     price:888,
// welcomeMessage: function(){
//     console.log(`${this.username} , welcome to website`);
// }
// }
// user.welcomeMessage()

// const addTwo =(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(6,6))

//Immediately Invoked Function Expressions(IIFE)
(function chai(){
    console.log(`DB CONNECTED`);
})();
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Ruma')