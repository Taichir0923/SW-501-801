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

// Array.prototype.myFilter = function(callback){
//     var result = [];

//     for(var i = 0; i < this.length; i++){
//         if(callback(this[i] , i)){
//             result.push(this[i])
//         }
//     }

//     return result;
// }

// push

// Array.prototype.myPush = function(arg){
//     this[this.length] = arg;
//     return this.length
// }

// const arr = [5, 6, 7]
// const arr1 = [12, 13, ...arr, 45]

// ... rest parameter
// ... spread operator

// function test(...arg){
//     console.log(arg)
// }

// DOM manipulation - Document Object Model
// const headingTag = document.querySelector('.title'); 
// attribute

// headingTag.style.color = 'rgb(255 , 0 , 0)';
// headingTag.style.backgroundColor = 'rgb(255, 255, 0)';

// class => className
// for => htmlFor

// camel case => background-color , backgroundColor

// classList


// Node prev, next
// 

// const shineElement = document.createElement('div')
// shineElement.setAttribute('class' , 'box');

// headingTag.append(shineElement)

// insertAdjacentHTML

// headingTag.insertAdjacentHTML('afterbegin' , `
//     <div class='box'>hi</div>
// `) 
// headingTag.insertAdjacentHTML('afterbegin' , `
//     <div class='box'>another box</div>
// `) 
// position , tag
// beforebegin
// afterbegin
// beforeend
// afterend

// const titles = document.querySelector('.title');
// const garchguud = document.getElementsByClassName('title');
// const paragraph = document.getElementById('text');

// dom event listener

// paragraph.onclick = printSth // touch

// function printSth (arg){
//     const capLetter = /[A-Z]/;
//     if(capLetter.test(arg)){
//         console.log('tom useg bichigdlee')
//     }
// }

// inpt.oninput = function

// paragraph.addEventListener('click' , function(event){
//     eventFunction();
//     console.log(event)
// }) // event , callback

// function eventFunction(){
//     console.log('hi hfdhkj')
// }

// document.addEventListener('click', function(event){
//     console.log(event.target)
// })

// document.addEventListener('keydown' , e => {
//     console.log(`Ta ${e.code} товчыг дарлаа`)
// })

// document.addEventListener('keyup' , e => {
//     console.log(`Ta ${e.code} товчлуур дээрээс хуруугаа авлаа`)
// })

// mousedown , mousemove , mouseup, mouseover , mouseenter , mouseleave

// mouseenter , mouseleave eventiig ashiglaad hover hiih

// document.addEventListener('mouseover' , (e) => {
//     if(e.target.id === 'text'){
//         e.target.classList.add('hover')
//     }
// })

// document.addEventListener('mouseout' , (e) => {
//     if(e.target.id === 'text'){
//         e.target.classList.remove('hover')
//     }
// })

// const users = []
// 1. хэрэглэгч бүртгэх форм үүсгэх /овог нэр , имэйл , нууц үг , id/
// 2. хэрэглэгийн объект үүсгээд users массив руу push хийж нэмэх
// 3. 5ш хэрэглэгч бүртгээд local storage дээр хадгалах.
// 4. веб хуудас ачааллах үед бүртгэлтэй 5 хэрэглэгчийн датаг users объект руу авдаг байх

// Asnychronous JS and Fetch API

// Promise => resolve , reject;
// Fetch

// const username = document.querySelector('#username');
// const number = document.querySelector('#number');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const btn = document.querySelector('#btn');

// let users = [];

// window.addEventListener('load' , () => {
//     if(localStorage['users']){
//         users = JSON.parse(localStorage['users'])
//     } else {
//         users = [];
//     }
// })

// btn.addEventListener('click' , (e) => {
//     e.preventDefault();
//     if(username.value.trim() !== '' && number.value.trim() !== '' && email.value.trim() !== '' && password.value !== ''){
//         const user = {
//             username: username.value,
//             email: email.value,
//             number: number.value,
//             password: password.value
//         }
//         users.push(user);
//         localStorage.setItem("users" , JSON.stringify(users))
//     }
// })

// fetch , axios
// url

// req - server luu huselt ilgeeh
// res - serverees irj bga hariu

// callback 

// Asynchronous JS
// async await

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         if(response.status === 404){
//             throw new Error("Таны хандсан хуудас олдсонгүй... 404")
//         }
//         return response.json(); 
//     })
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => {
//         console.log(error.message)
//     })

// try catch
const userContainer = document.querySelector('.container'); 

const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if(response.status === 404){
            throw new Error('404 huudas oldsongui')
        }

        const result = await response.json();
    
        userContainer.innerHTML = '';

        result.forEach(user => {
            userContainer.insertAdjacentHTML('beforeend' , `
                <div class="flex py-3 px-4 hover:bg-gray-100 transition duration-400 rounded-md w-full items-center justify-between">
                <p>${user.name}</p>
                <div class="flex items-center gap-4">
                    <button>todo</button>
                    <button>posts</button>
                    <button>albuls</button>
                </div>
            `)
        })

    } catch (error){
        console.log(error.message)
    }
}
getData()

// f1 - async
// f2
// f3
// f4 - cb f1

// alert('alert1')
// console.log('fjdfklk')
// alert('alert2')
// alert('alert3')

// Хэрэглэгчдийн нэрсийг дэлгэцэнд хэвлэх

