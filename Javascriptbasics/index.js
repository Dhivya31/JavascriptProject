// var ,let,const
// let name="Divi";
// let data ="Build on first javascript";
// let result =" My Name is " +"" + name +" " +"Learn"+ " " + data;
//console.log(result);
//alert(result);

// Js Constants

// const  per ="renu";
// constant values are not change the values

//Js Datatypes

// two types of primitive datattype and reference datatype

//primitive datatypes are string,int,boolean,null,undefined,symbol
//reference datatypes are Object,array,function

// string datatype
// check the browser console using typeof datatypes
// let Fname="div";
// let age=20;
// let isyoung=true;
// let trophy =null;
// let render;

//reference datatype
// #Js Object create new object

// let custname="joshini";
// let cusage=3;
// let gender = "female";

// let cusdetail ={
//     custname:"joshini",
//     cusage: 3,
//     gender:"female",
//     address:{
//         state:"Tamilnadu",
//         city:"chennai"
//     }
// }
/*console.log(cusdetail.cusage);*/


// object to get two ways are dot notation and bracket notation
// dot notation is declare console.log(cusdetail.cusage)
// bracket notation is declare console.log(cusdetail['gender'])


// #javascipt array

// let colors =["red","green","blue"]
//  colors[4] ="orange";
//console.log(colors);

25/12/23
// // js function

// function newfunction(){
//     let name ="Anbu";
//     let lastname ="sivan";
//     let mesg = "Hello my fullname is" +name +lastname;
//     console.log(mesg);
// }
// newfunction();

// # Js operators 
// variable + operator =algorthim;
// Types of operator 
// * Arthimetic operator,Assignment operator,Comparison,Logical,Bitwise

// // Assignment operator
//  let x=5;
//  x*=5
//  console.log(x);

//  //Arthimetic operator
//  let num1 =5;
//  let num2 =20;
//  console.log(num1 * num2);
//  //Increment and Decrement operator
//  console.log(++num1);

// Comparison operator
// // relational operator 
// let x=6;
// console.log(x<5); // false
// // Equality operator
// console.log(x===5) // false
// console.log(x!==5) // true
// //string comparison
// console.log('alen' <'anbu'); // true

// //js equality operator
// // there are two types of equality

// // strict equality
// console.log(1===6); // false
// console.log('range' ===7); // false
// // lose equality
// console.log(1==1) // true
// console.log(true==1)

// // #Ternary operator
//  let age =24;
//  let type =age<18 ?"Adult Ticket" :"Child Ticket";
// console.log("Ternary",type);


//Logical operator

//there are three types of logical are,
//AND(&&)->return true If both operator are true 
//OR(||) =>return true if anyone operator are true
// NOT(!) =>opposite to return values

// let highincome =true;
// let cibilscore=false;

// console.log(highincome != cibilscore);

// js logical operator with non boolean values

// falsy,truthy,(anything that is not falsy is truthy)

// #undefined,#null,#0,#false,#" ",#NAN

// let usevalue="yellow";
// let defaultvalue ="no color";
// let res =usevalue || defaultvalue
// console.log(res);

// JS Bitwise operator
// human code -> Machine code(0,1)

//js operator precedence

// let x=2+5*10;
// console.log(x);

// conditional statement
// let hour = new Date();
// let hrs =hour.getHours();
// if(hour>= 0 && hour<13)
// {
//     console.log("morning");
// }
// else if(hour >=13 && hour<=17)
// {
//     console.log("Afternoon");
// }
// else{
//     console.log("Evening");
// }

// Switch case

// let x=60;
// if(x <10){
//   console.log("Buy Android mobile");
// }
// else if(x<60 && x>80)
// {
//     console.log("Iphone Mobile");
// }
// else{
//     console.log("Button mobile");
// }

//js loops are for,while,do while 

//for loop syntax - for(initialexpress;condition step;increment)

// for(let i=10;i>=1;i--)
// {
//    if(i%2!==0){
//       console.log("odd" + i);
//    }
// }

// //while loop
// let j=10;

// while(j>=1){
//    if(j%2!==0){
//      console.log("while" ,j);
//    }
//    j--;
// }


// let ax=10;
// do{
//    if(ax%2==0)
//    {
//       console.log("Do while Odd" +ax);
//    }
//    ax--;
// }
// while(ax>=1)

//for in loop bind the index values

// let person={id:1,items:'Android Mobiles',sex:'female'}

// for(let data in person){
//    console.log(data + " : ",person[data]);
// }
// let colors=['red','green','yellow'];

// for(let key in colors)
// {
//    console.log(colors[key])
// }

//for of loop bind the values

// let fruits =["apple","Orange","mango"];
// for(let key of fruits)
// {
//    console.log(key);
// }

// js infinite loop

// for(;;){
//    console.log("infinite");
// }

//js object (oop)
// let name="dv";
// let age=34;
// let intreset=['creating,teaching new things'];

// let address={
//    city:"chennai",
//    state:"tamilnadu"
// }
// function greeting(){
//    //let msg ="my name is " + name + " i love" + intreset;
//    let msg =`my name is  ${name} , i love ${intreset}`;

//    console.log(msg)
// }
// greeting();

// Object oriented Programming (oop)
// let person={
//    name :'dharshan',
//    age:34,
//    intreset :['creating,teaching new things'],
//    isalive:true,
//    address:{
//       city:'chennai',
//       state:'tamilnadu'
//    },
//    greeting:function(){
//       let msg =`my name is  ${this.name} , i love ${this.intreset}`;

//       console.log(msg);
//    }
// }
// person.greeting();


// js Factory functions

// function createPerson(name){// camelcase : myFirstName
//    return{
//       name ,
//       greeting(){
//          let msg =`My name is  ${this.name} `;
   
//          console.log(msg);
//       }
//    }
   
// }
// let dooshan =createPerson('dooshan')
// dooshan.greeting();


//js constructor function
// function Person(name){  // Pascal ->MyFirstName
   
//       this.name = name,
//       this.greeting =function(){
//          console.log(` My name is ${name}`);
      
//    }
// }

// let person = new Person("raj"); // create the empty object
// let x={};
// person.greeting();

// js Dynamic Object

// const person ={
//    name:"Farthima"
// }
// person.age =24;
// person.greeting = function(){}
// delete person.greeting;
// delete person.name;
// console.log(person);


//Js Constructor Property
// let name='Dinesh'; // new string('dinesh')
// let age=20; // numberliterals ->new number()
// let isalive = true //booleanliteral -> new boolean

// console.log(name,age,isalive);

// let names= new String('Dinesh'); // new string('dinesh')
// let ages=new Number(29); // numberliterals ->new number()
// let isalives =new Boolean(true) //booleanliteral -> new boolean

// console.log(names,ages,isalives);

//let x={} ->let x= new object{}

//Js Functions are Objects

// function person(name,age){
//    this.name=name,
//    this.greeting = function(){
//       console.log(`My Name is $(this.name)`);
//    }
// }
// // Is this represents for this code

// let person =new Function('name',`this.name=name,
// this.greeting = function(){
//    console.log(Hello);
// }`)

// const person =new person('Trisha')


// person.call({},'latha') // call is a method 
// person.apply({},['latha']) //apply is a method


//# Js Primitive value Vs Reference Value

//Primitive value are {number,string,boolean,symbol,undefined,null}
//Reference value are {Object,array,Function}

//Primitive values types
// let x= 10;
// let y= x;
//again change the x=20 does not change x value in y so this primitive value

//Both x&y variable are independent it does not care what you do with x variable


//reference values types
// let ref={value:10};
// let yes = ref;
// ref.value=50;

//primitive another example
// let cart=5;

// function updateCart(cart){
//    cart++;
// }
// updateCart(cart);

// console.log("Cart " + cart);

// // reference another example

// let cartObj={val:50}
// function updates(cart){
//  cart.val++
// }
// updates(cartObj)
// console.log("Cart",cartObj.val);

//#Enumeration Properties of object

// const user={
//    name:'dv',
//    getName(){
//       console.log(`My name is" $(this.name)`);
//    }
// }

// for(let key in user)
// {
//    console.log(key,user[key]);
// }

// for(let key of user)
// {
//    console.log(key);
// }

//console.log(user);

//Cloning in Js #cloning is a copy to duplicate object

// const data={
//    name:"dvi",
//    getName(){
//       console.log('Name $(this.name)');
//    }

// }
// const another =data;
// console.log(another);
// let another={}
// for(let key in data)
// {
//    another[key]=data[key];
// }
//let another={...data}
//console.log(another);

//#JS Garbage Collection is automatically stored in memory location

//JS string Object
// let firstname ="devaa";
// let lastname="priyan";

// let res=lastname.startsWith('d');

// let result=firstname.repeat("a")
// console.log(result);

//#JS Template Literal
//there some type of literal
// Object;{},Boolean:true or false,String:""
//Template literals are back tick

// const data =`Welcome to learn /n"Javascript" console`
// console.log(data);

// // JS Date Object

// const date=  Date();
// console.log(date);

// const dates= new Date();
// console.log(dates.getDay());

// let [month,year,datess] =new Date().toLocaleDateString("en-In").split("/")
// console.log([month,year,datess]);

//# Js Array in depth

//Js array is passing the element in array,removing and filtering the element in array,splitting the aaray,
//combing the element the array


//Js adding the Element in array
//const product  =["soap","powder","mixer"]

// product.push("hair brush");
// console.log(product);

// product.unshift("Makeup kit");
// console.log(product);

// product.splice (1,0,"Oils");
// console.log(product);

// //Js using Finding element in array
// const fruits =["apple","mango","grapes"];
// console.log(fruits.indexOf("grapes"));
// console.log(fruits.lastIndexOf("mango"));
// console.log(fruits.indexOf("red" !== -1));
// console.log(fruits.includes("banana"));

//js reference value  array using finding the element

// const orders =[
//    {id:1,item:'smartphones',quanity:1},
//    {id:2,item:'android',quanity:3},
//    {id:3,item:'button',quanity:3},
//    {id:14,item:'smartphones',quanity:4},
//    {id:15,item:'button',quanity:35}
// ]

// console.log(orders.includes({id:1,item:'smartphones',quanity:1}));
// //search the array value

// let res=orders.findIndex(function(order){
//    return order.item ==="button"
// })

// console.log(res);

// const items =["a","b","c","d"];
// console.log(items.includes("f"));
// console.log(items.indexOf("c");

//js arrow function-ES6
// const items=[
//       {id:1,item:"android", cost:6500},
//       {id:2,item:"iphone", cost:27500},
//       {id:3,item:"button", cost:500},
// ];
// let res =items.find((order) => order.item === "iphone");
// console.log(res);

//##Removing the element in js array
//const number=[1,2,3,7,8]

//# three methods are Push ->pop,Unshift->shift,Splice->splice
//end pop
//number.pop()

//start shift
//number.shift()

//Middle splice
// number.splice(1,2);
// console.log(number);

//#Emptying a js array
//let number=[1,2,3,7,8];

//let another =number;
//solutions 1
//number=[];

//solution 2
//number.length =0;

//solution 3
//number.splice(0,number.length);

//solution 4
// while(number.length){
//    number.pop();
// }
// console.log(number);

//#COMBINING AND EXTRACTING THE ELEMENT ARRAY
// const shopping =[{item :"maagi",item :"beans"}];
// const additionalone=["matchbox","salt"];
// //combine
// let recipe=shopping.concat(additionalone);
// shopping[0].item="Noodles"
// //Extract using slice method
// let extract =recipe.slice(1,3);
// console.log(extract);
// console.log(recipe);


//Es6 update for js spread operator

// const shop=["red","blue","white"];
// const colors=["orange","yellow","green"];

// let output=[...shop,{name:'divi'},true,...colors]
// console.log(output);


//58# Js Iterating elements

// const dailyRoutine = ["wakeup","eat","sleep"]

// //for-of
// for(let routine of dailyRoutine)  console.log(routine);


// //for-in
// for(routine in dailyRoutine)
// {
//    console.log(routine,dailyRoutine[routine]);
// }

// //for-each
// dailyRoutine.forEach(function(routine,index){
// console.log(index,routine);
// })

// //arrow function using for each loop
// dailyRoutine.forEach( routine =>{console.log(routine);})

//#59 Js Joining and spliting the array
// const dailyRoutine = ["wakeup","eat","sleep"]

// let dailyroutines =dailyRoutine.join("-");
// console.log(dailyroutines);

// let fullname ="dhivya priya";
// let userName =fullname.split(" ");
// let firstname =userName[0];
// let lastname=userName[1];

// console.log(`My firstname is ${firstname} and last name is ${lastname}`);
// console.log(userName);
// let postTitle ="this is my first post";
// let postSlug=postTitle.toLocaleUpperCase().split(" ");
// let finalslug =postSlug.join('_');

// console.log(finalslug);


//#60 Sorting a JS array

//Students role number based enter in the class

const students =[3,8,1];

const student =[{id:3,name:"senthil"},
{id:5,name:"guna"},
{id:8,name:"raj"}
];
student.sort(function(a,b){
   // a < b => -1
   if(a.name <b.name){
      return -1;

   }
   if(a.name > b.name)
   {
      return 1;
   }
   return 0;

   //a > b => 1

   //a ===b => 0

});
console.log(student);

students.sort();
console.log(students);


//#63Finding a js array - filter() method 

// const items=[
//       {id:1,item:"android", cost:6500},
//       {id:2,item:"iphone", cost:27500},
//       {id:3,item:"button", cost:500},
// ];
// //debugger;
// let afforadable=items.filter(function(value){
//     return value.cost >10000;
// });

// console.log("MAximum",afforadable);

// //#Finding a js array - find() method 

// const items=[
//     {id:1,item:"android", cost:6500},
//     {id:2,item:"iphone", cost:27500},
//     {id:3,item:"button", cost:500},
// ];


// let afforadablefind =items.find(function(value){
//   return value.cost < 10000;
// });
// console.log("MAximum",afforadablefind);

//#64 DIFFERENCE BETWEEN  find() AND FILTER Method 

// const items=[
//     {id:1,item:"android", cost:6500},
//     {id:2,item:"iphone", cost:27500},
//     {id:3,item:"button", cost:500},
// ];

// let afforadablefind =items.find(function(value){
//   return value.cost < 10000;
// });

// console.log("Find",afforadablefind);

// let afforadablefiter =items.filter(function(value){
//     return value.cost < 10000;
//   });
  
//   console.log("Filter",afforadablefiter);
//   let findindex =items.findIndex(function(value){
//     return value.cost >10000;

//   });
  
//   console.log("FindIndex",findindex);


//#65 Js mapping array

// primitive type using map


// const numbers =[1,2,3,4,5,6];
// const res = numbers.map( function(value) { 
    
//     return value * 3 
// });

// console.log(res);

// //reference type using mapping js array

// const people =[
//     {id:1,firstname:"raja",lastname:"S"},
//     {id:1,firstname:"suresh",lastname:"laskman"},
//     {id:1,firstname:"fathima",lastname:"megan"}
// ]

// const peoples =people.map(function
//     // (values) => values.firstname + values.lastname

//   (values) { let fullname =[values.firstname,values.lastname].join(" ");
//              let obj ={id : values.id ,fullname};
//              return obj;
// })

// console.log(peoples);


// JS Methods in array 
   //#.sort
   //#.every,some
   //#.filter
   //#.map


//#66 Js chaining methods


// const items=[
//     {id:1,title:"android", cost:6500},
//     {id:2,title:"iphone", cost:27500},
//     {id:3,title:"button", cost:500},
// ];

// // sort it using sort by lowest  method
// let sorybylowestprice =items.sort(function(a,b){
//      return a.cost -b.cost;// asecnding
//     // return b.cost -a.cost;//desecnding
// })

// // sort it by title asecending
// let sortbytitle =sorybylowestprice.sort(function(a,b){
//     if(a.title < b.title) return -1

//     if(a.title > b.title) return 1

//     return 1
// })

//filter products less than 8000

// let filtered =sortbytitle.filter(function(value){
//     return value.cost <=8000;
// })
// //map this : android -7500
// let finalres =filtered.map(function(val){
//     return val.title + " - " + val.cost;
// })

// let final = items.sort(
//      (a,b) => a.cost -b.cost).sort(function(a,b){
//         if(a.title < b.title) return -1
    
//         if(a.title > b.title) return 1
    
//         return 1
//     }).filter((value) =>
//         value.cost <=8000).map((val) =>
//              val.title + " - " + val.cost)

//    console.log(final);

// js arrays reduce() method

// const donations =[45,89,65,89,7891];
// donations.reduce(function(previousVal,currentVal){
//     //LOGIC
//     console.log("previousval",previousVal);
//     console.log("currentval",currentVal);

//     return previousVal + currentVal;

// })
//console.log(finalres);