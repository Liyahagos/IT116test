 console.dir(document);

 //Gives the domain of the web page//
console.log(document.domain);
//Gives the URL of the web page //
console.log(document.URL);
// Here we are accesing the title element //
console.log(document.title);
//// The document attrubute can access different elements //
console.log(document.doctype);
//Here It shows us everting in that is nested in the head element//
console.log(document.head);
// Here we are accessing everything that is nested in the body element//
console.log(document.body);
//Here it gives uss all the ellement inside the document//
console.log(document.all);
// We are accessing the 
console.log(document.all[10]);

document.all[10].textContent = "I just changed the header!";

console.log(document.forms);
// a way of using a dom to figure what are in the tree//
console.log(document.links);
console.log(document.images);

//get element by id//

console.log (document.getElementById('header-title'));

//
let headerTitle = document.getElementById('header-title');

console.log(headerTitle);


headerTitle.textContent = "Changed the Title again."
headerTitle.innerText = "Hello Changed You Again"

headerTitle.style.color = 'hotpink';

/////get element by class name

var items = document.getElementsByClassName('list-group-item');

console.log(items);
// we are referencing by their index
items[0].style.backgroundColor = 'red'; 
items[0].style.fontWeight = 'bold'; 
items[0].textContent = 'Tigray'
items[0].style.color = 'yellow';

items[1].style.backgroundColor = 'yellow'; 
items[1].style.fontWeight = 'bold'; 
items[1].textContent = 'Genocidal'
items[1].style.color = 'Red';

items[2].style.backgroundColor = 'pink'; 
items[2].style.fontWeight = 'bold'; 
items[2].textContent = 'War'
items[2].style.color = 'white';

// we are creating a forloop

//declare specify what index you wanna begin with


// This is a counter which loops starting from 1 all the way until 10
 for (let i = 1; i <= 10; i++) {
    console.log(i);

 }
//This is a counter which loops starting from 0 all the way until to 20 and it picks even numbers only//
 for (let i = 0; i <=20; i +=2) {
    console.log(i);
 }
//The loop here is in a descending order, it will be starting with hundred and goes down subtracting by 2//
 for (let i = 100; i >= 0; i -=2) {

     console.log(i);

 }
//Here we declared the array and the loop starts by 0 and increments by 1//
//We declared the design by setting colors//
 const myDiamonds = ['Snacky','Scary','Lily','IttyBitty','Pinchie','Piggy','Lanky','Nibbles','Kibbles'];

  for(let i = 0; i < myDiamonds.length; i++){

     console.log(i, myDiamonds[i]);
  }

  for (var i = 0; i < items.length; i++) {

         items[i].style.backgroundColor = 'grey';
         items[i].textContent = 'Changing The List Items';
         items[i].style.color = 'white';
    
 }

 //////////////////////////////////////////////////////////////////////////////
///////////////GetElementByTagName

var li = document.getElementsByTagName('li');

 console.log(li);
 console.log(li[1]);

 li[1].textContent = "Hello 2 Now";
 li[1].style.fontWeight = 'bold';
 li[1].style.backgroundColor = 'green';
 li[1].style.color = 'white';

 for(var i = 0; i < li.length; i++){

        li[i].style.backgroundColor = 'lightgrey';
        li[i].textContent = 'I Changed The Items From the DOM'; 
        li[i].style.color = "white"
 }

 /////////////////////////////////////////////////////////////////////////////
///////////// - Query Selector

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px hotpink';

var input = document.querySelector('input');
input.value = "I just Changed the text in The Input Box ";

var submit = document.querySelector('input[type="submit"]');
submit.value = "HELLO BUTTON";
// // 
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue'; 

var otherItem = document.querySelector('.list-group-item:nth-child(2)');
otherItem.style.color = 'coral';

///////////////////////////////////////////////////////////////////////////

var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'Hey Monte, I changed the title again';

// 
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

// 
for (var i = 0; i < odd.length; i++) {

    odd[i].style.backgroundColor = 'grey';
    even[i].style.backgroundColor = 'green';
    even[i].style.color = 'whitesmoke';
    odd[i].style.color = 'whitesmoke';
}