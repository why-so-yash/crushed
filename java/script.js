// Vaibales and constants 
// var a = 1;
// const b = 2;
// b=4
// console.log(a+b);

// hoisting - variable and funcs are hosited whioh means their declaration is moved on top of code 

// console.log(c);
// var c;
// c=7;

//types in js
//primitive and refernce 
// {},[],() all are reference.
// a=[1,2,3];
// b=a;
// b.pop();
// console.log(a)
// console.log(b)
// conditionals - if else , else-if

// a=2;
// b=3;
//  if(a>b){
//     console.log('a>b')
//  }
//  else{
//     console.log('a<b')
//  }

//loops

// for(var i=0; i<11; i++){
//     console.log(i);
// }
// var i=0;
// while(i<=10){
//     i++
//     console.log(i);
// }

//Functions

// function abc(){
//     console.log('Dancing with your ghost.')
//     abc()
// }
// abc()

// array

// a=[1,2,3,4,5]
// a.pop();   //delete last digit from array.
// a.push(7); //add digit at the last of the array.
// a.shift(); // delete first digit from array.
// a.unshift(11); // add digit at index1.
// a.splice(3,1); //delete digits from specific index. 
// console.log(a);

// Js has two version - es5 (old version) & es6(old version).
// es5 version only has 'var', but es6 has 'let', 'const'.
// But, we can you use both the version.
// var functions scoped hota hai.
// let braces scoped hota hai.
// var apne pure parent function me use hoskta hai.
// var adds itself to the window object but, let & const doesn't.

// console is not the part of the js!, it's borrowed from the window.

// execution context - an imaginary container made by our function, which it containes variables, fun which are inside the parent func & lexial enviorment of that function.

// function abc(){ // abc() doesn't use b.
//     var a=12;
//     console.log(a);
//     function bcd(){
//         var b=13;
//         console.log(a);
//     }
// }

// function print(item){
//     console.log(item);
// }
// // How to copy referenece values. (by spreading)
// var a=[1,2,3,4,5]
// var b=[...a];
// b.pop();
// print(b);
// print(a);

// var obj={name:'harsh'};
// var copyobj={...obj};
// print(obj)
// print(copyobj)
// copyobj.name='yash';
// print(copyobj);

// falsy values - 0, false, undefined, null, Nan(not a number) & document.ll
// truthy values - all the values excluding falsy.

// 'foreach' (loop) - used while dealing/working with arrays.

//  a=[1,2,3,4,5,6,7,8,9,10];
// a.forEach(function(i){ // foreach makes a temporary copy of array & implement the code on it.
//     print(i+1);
// })
// print(a);

// forin (loop) - is used on obj (dictionary)

// var obj={name:'Yash', age:18, Clg:'SVC'};
// for (var i in obj){
//     console.log(i,obj[i]);
// }

// callback fncs 
// jab bhi koi aisa code jo baad me chlta hai aap likoge, kyuki wo code baad me chlta hai js ko ye pata nhi hota ke wo complete hua ya nhi, aise code ke completion pr jhs ko batay jaata hai ke wo complete hogya aur app use chala sakte ho, ye bataane ke kaam callback khete hai.

// setTimeout(function (){
//     print('Me past se aya hu!');
// },3000) // used for time dealy in the execution of the code/ouput of the code.
 
// first class func.

// print(Array.isArray([])); checking whether an array is an array or aon object.

// Updating object (dictionary)

// a={Name:'Yash', Age:18};
// print(a)
// delete a.Age;
// print(a)

// D.O.M - Document Object Model.

// 4 pillars of DOM -
// 1. Selection of an Element
// 2. Changing 
// 3. Changing CSS
// 4. Event Listener

// var a= document.querySelector('h1')
// a.innerHTML = "Kl SEC ka exam hai!"
// // a.style.color='White'
// // a.style.backgroundColor='black'
// a.addEventListener('click',function(){
//     a.innerHTML= 'Rolla kaat denge.'
//     console.log(a);
// })

// var bulb = document.querySelector('#bulb');
// var btn = document.querySelector('button');
// var bod = document.querySelector('body');
// var flag=0;
// btn.addEventListener('click',function(){
//     if(flag==0){
//         bulb.style.backgroundColor = 'white';
//         console.log('ON');
//         flag=1
//     }
//     else{
//         bulb.style.backgroundColor = 'black';
//         console.log('OFF');
//         flag=0
//     }
    
// })
// var flag=0;
// btn.addEventListener('click',function(){
//         if(flag==0){
//             bod.style.backgroundColor = 'black';
//             console.log('OFF');
//             btn.innerHTML='OFF';
//             flag=1
//         }
//         else{
//             bod.style.backgroundColor = 'white';
//             console.log('ON');
//             btn.innerHTML= 'ON'
//             flag=0
//         }
        
//     })
// var h= document.querySelectorAll('h1');
// h.forEach(function(a){
//     console.log(a);
// })

// document.getElementById() get element by Id
// document.getElementByClass() get element by Class.
// .textContent used for whem we have to only change  text.
// .innerHTML used for when we have to just the html.

// 5 projects with DOM

// 1. Add friend feature with same button.
// 2. Insta Love btn
// 3. Custom cursor
// 4. Multiple Image hovering Animation.
// 5. Insta story Feature

//----------------- 1 ---------------------

var a = document.querySelector('h5');
var b = document.querySelector("#request");
var c= document.querySelector("#card");
var bod = document.querySelector('body');
var r= document.querySelector('#remove')
b.addEventListener('click',function(){
    a.innerHTML=' Friends';
    a.style.color='green';
    c.style.backgroundColor='#F4D3D3'
    bod.style.backgroundColor='white'
})
r.addEventListener('click',function(){
    a.innerHTML='Strangers';
    a.style.color='Red';
    c.style.backgroundColor='whitesmoke';
    bod.style.backgroundColor=' #7B66FF';
})
