//NORMAL METHOD
/*const min=1
 const max=3
 const answer=Math.floor(Math.random()* (max-min +1) + min)
 console.log(answer)
 let attempts=0
 let running=true
 while(running){
  let guess = window.prompt("Enter the number between the range 1-3")
 guess = Number(guess)
  if(isNaN(guess)){
  console.log("INVALID FORMAT")
 }
 else{
  attempts++
  if(guess<answer){
    console.log("Too Low ,Enter a bit higher number")
  }
  else if(guess>answer){
    console.log("Too greater!! Enter a bit lower")
  }
  else{
    console.log(`CORRECT!!The answer is ${answer} and the number of attempts are ${attempts}`)
    running=false;
  }
 }
}
 //IN HTML PAGE 
 */
/*
const min=1
 const max=3
 const answer=Math.floor(Math.random()* (max-min +1) + min)
 console.log(answer)
 let attempts=0
 let running=true
 let guess
 let h1=document.getElementById("h1")
document.getElementById("mybutton").onclick= function(){
    guess = document.getElementById("mytext").value
        if(isNaN(guess)){
         h1.textContent = "INVALID FORMAT"
        }
        else{
            attempts++
            if(guess<answer){
              h1.textContent = "Too Low ,Enter a bit higher number"
            }
            else if(guess>answer){
              h1.textContent= "Too greater!! Enter a bit lower"
            }
            else{
              h1.textContent = `CORRECT!!The answer is ${answer} and the number of attempts are ${attempts}`
              running=false;
            } 
        }
    }

*/
//FUNCTION= A section of reusable code
           //declare the code once and use it anywhere yoy want
           //call the function when needed to execute the code

 //EXAMPLES
 /* function happybirthday(username,age){
  //here username and age are the parameters
  console.log("happy birthday!!")
  console.log(`Happy birthday ${username} `)
  console.log(`You are ${age} old`)
 }         
 //FUNCTION CALLING
 happybirthday("spoo",20)
 //here spoo and 20 are arguments

 function add(x,y){
  return x+y
 }
 console.log(add(2,3))

 function sub(x,y){
  return x-y
 }
 console.log(sub(2,3))

 function mul(x,y){
  return x*y
 }

 console.log(mul(2,3))

function isEven(number){
  if(number%2===0){
    return true
  }
  else{
    return false
  }
}

console.log(isEven(7))

//SAME USING TERNARY OPERATION
 function Even(num){
  return num%2===0 ? true:false
 }
  console.log(Even(6))


  //Variable scope= where a variable is recognized and accessible (local vs global)
*/

//TEMPERATURE COVERSION PROGRAM
const text=document.getElementById("text")
const fahrenheit=document.getElementById("fahrenheit")
const Celsius=document.getElementById("Celsius")
const p1=document.getElementById("p1")
let temp
document.getElementById("mybutton").onclick = function(){
  if(fahrenheit.checked){
    temp=Number(text.value)
    temp= temp * 9/5 +32
    p1.textContent = temp + "°F"
  }
  else if(Celsius.checked){
    temp=Number(text.value)
    temp= (temp-32)*(5/9);
    p1.textContent = temp + "°C"
  }
  else{
    p1.textContent= "Select a unit"
  }

}