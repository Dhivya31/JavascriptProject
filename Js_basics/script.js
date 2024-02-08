//Selecting popup box and popup overlay
var popupbox =document.querySelector(".popupbox");
var popupoverlay =document.querySelector(".popup-overlay");
var addpopupbutton =document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click" ,function(){

    popupbox.style.display="block";
    popupoverlay.style.display="block";
})

//select the cancel button

var cancelbutton=document.getElementById("cancelbook");

cancelbutton.addEventListener('click',function(event){
    event.preventDefault();

    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

//select container,add-boo,book-title-input,book-author-input,book-description-input

var container=document.querySelector(".container");
var addbook=document.getElementById("addbook");
var booktitle=document.getElementById("book-title-input");
var bookauthor=document.getElementById("book-author");
var bookdescription=document.getElementById("book-description");

addbook.addEventListener("click" ,function(event){
    event.preventDefault();
    var div =document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${booktitle.value}</h1>
    <h4>${bookauthor.value}</h4>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>
`
    container.append(div)
    popupbox.style.display="none";
    popupoverlay.style.display="none"
})


function deletebook(event)
{
    event.target.parentElement.remove();
}