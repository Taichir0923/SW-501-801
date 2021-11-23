// callstack => f1 => f2 => f3
// recursion => f1 => f1 10 udaa => 

// callback

// 2ax - 8 = 10
// x = 9



// function bubbleSort(arr){ // Abstraction
//     console.log(arr)
// }

// let x;
// function test(){ // void
//     console.log('hi')
// }

// function test1(){
//     return 'hi'
// }

// function funkts2(){
//     return function(){
//         return function(arg){
//             console.log(arg)
//         }
//     }
// }

// function sumUpTo(num){
//     if(num === 1){
//         return num;
//     }
//     return num + sumUpTo(num - 1);
// }

// const number = sumUpTo('gdjhkg')

// function sayHello(callback){
//     console.log(callback())
// }

// sayHello(function(){
//     return 'hello'
// })

// const arr = [14, 15, 21, 22, 13, 100, 55, 32];

// arr.forEach(function(el){
//     console.log(el)
// })

// cb

// loops

// // forEach , filter , find , findIndex , map 

// function User(username , email){
//     this._username = username;
//     this._email = email
// }

// User.prototype.getName = function(){
//     return this._username
// }

// User.prototype.setName = function(arg){
//     this._username = arg;
//     return this._username;
// }

// const narada = new User("Narada" , "narada@mail.com");
// const steve = new User("Steve" , "steve@mail.com");

// primitive datatype 
// 1 number
// 2 string
// 3 boolean
// 4 undefined
// 5 null

// non-primitive datatype
// array [{}, {}, {}]
// object
// regular expression

// var obj = {
//     username: 'Narada',
//     email: 'narada@mail.com',
//     calculateAge: function(tursunOn){
//         this.nas = 2021 - tursunOn
//     }
// }

// let x = 5

// class User {
//     constructor(username){
//         this.username = username
//     }

//     getName(){
//         return this.username
//     }

//     static test(){
//         console.log('testing methodical function')
//     }

// }

// METHODICAL
// PROTOTYPICAL

// polyfill
// filter => es6
// es5

// let x = 5

// forEach(cb(el){})

// Array.prototype.myForEach = function(callback){
//     for(var i = 0; i < this.length; i++){
//         callback(this[i] , i)
//     }
// }

// filter polyfill

Array.prototype.myFilter = function(callback){
    var result = [];

    for(var i = 0; i < this.length; i++){
        if(callback(this[i] , i)){
            result.push(this[i])
        }
    }

    return result;
}

// push

// Array.prototype.myPush = function(arg){
//     this[this.length] = arg;
//     return this.length
// }

// const arr = [5, 6, 7]
// const arr1 = [12, 13, ...arr, 45]

// ... rest parameter
// ... spread operator

function test(...arg){
    console.log(arg)
}