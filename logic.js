// var el=document.createElement("h1");
// var elcontent=document.createTextNode("Hello World Using Js")
// el.appendChild(elcontent)
// console.log(el)
// THis above code is to show only in console



// Lets show in UI
// |
// |
// |
// ^
// var divel=document.getElementById("div1");
// var el=document.createElement("h1");
// var elcontent=document.createTextNode("Hello World Using Js");
// el.appendChild(elcontent);
// divel.appendChild(el);
// ^
// |
// |
// |
// the above one is to create element and show in UI form 




// TO-DO LIST USING CREATE ELEMENT


var ulel=document.getElementById("ul1");

var todoel=document.getElementById("todo");





function additem(){
// Delete button creation inside UL, near Li
var buttonel=document.createElement("button")
var btcontent=document.createTextNode("Delete Item");



// Edit Button Creation Inside Ul, near Li
var editel=document.createElement("button");
var editcont=document.createTextNode("Edit Text");



// Content of Search Bar
var liel=document.createElement("li");
var licontent=document.createTextNode(todoel.value);








// CALLING todo content(createtextnode) in out our own created Li Element

liel.appendChild(licontent);
// Delete button inside Ul
buttonel.appendChild(btcontent);
liel.appendChild(buttonel);
//Edit Button inside Ul 
editel.appendChild(editcont);
liel.appendChild(editel);

// todo content inside Ul
ulel.appendChild(liel);
 todoel.value="";
    todoel.focus();





   buttonel.addEventListener("click", function() {
    liel.remove();})
}






