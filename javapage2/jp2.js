var name="ronaldo";
var age=27;
var team="juventus";

var nameUserInput=prompt("what is the best e-sport player?")
var ageUserInput=prompt("age?")
var teamUserInput=prompt("Team?")

if (nameUserInput === name){
    console.log("true");
    alert("yes")
}else{
    console.log("false");
    alert("no")
}

if (ageUserInput === age){
    console.log("true");
    alert("yes")
}else{
    console.log("false");
    alert("no")
}

if (teamUserInput === team){
    console.log("true");
    alert("yes")
}else{
    console.log("false");
    alert("no")
}

function myFunction(p1, p2) {
    return p1 * p2;
  }



var amountOfCups=prompt("how many cups ronaldo have per the year? the answer 4")


  document.getElementById("demo").innerHTML = myFunction(age,amountOfCups);
    var element=document.getElementById('ronaldo');
element.innerText='name age team cups/year :'+name+"  "+age+ "  " +team+"  "+"  "+amountOfCups




