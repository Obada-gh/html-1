var name="ronaldo";
var age=27;
var team="juventus";

var nameUserInput=prompt("what is the best football player?")
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

var amountOfCups=prompt("how many cups ronaldo have?")

var element=document.getElementById('ronaldo');
element.innerText='name age team cups :'+name+"  "+age+ "  " +team+"  "+"  "+amountOfCups




