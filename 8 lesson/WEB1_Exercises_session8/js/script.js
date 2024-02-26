var exampleLine = document.getElementById("exampleLineId");
exampleLine.innerHTML = "This is just an <u>example line</u> of how innerHTML works.";

//Write your function declarations below this line
function add_two_numbers(n1, n2) {
    return n1 + n2;
}

//2
var fifteen = document.getElementById("firstFieldId");
firstFieldId.innerHTML = 15;

//3
var eightteen = document.getElementById("firstLineId");
eightteen.innerHTML = eightteen.innerHTML + "18";

//4
animals = ["cat","dog","parrot"];

//5
var names = document.getElementById("secondLineId");
names.innerHTML = animals[0] + " " + animals[1] + " " + animals[2];

//6
var myFruits = ["apple","banana"];

//7
var fruits = document.getElementsByClassName("fruitClass");

for (var i = 0; i < fruits.length; i++) {
    fruits[i].innerHTML = myFruits[i];
}

//8
document.getElementById("thirdLineId").style.textDecoration = "underline";

//9
var fourthLine = document.getElementById("fourthLineId");
var animalNames = ["Martin","Ann","Jakub"];


var openingtag = "<ul>";
for (let i = 0; i < animalNames.length; i++) {
    openingtag += "<li> " + animalNames[i] + "</li> ";
}
var endingtag = "</ul>";

fourthLine.innerHTML = openingtag + endingtag;

//10
function add_two_numbers(n1, n2) {
    return n1 + n2;
};

var blabla = document.getElementById("exampleFunction");
blabla.innerHTML = blabla.innerHTML + " " + add_two_numbers(2,3);

//11
function multipy_three_numbers(n1, n2, n3) {
    return n1 * n2 * n3;
};

var fifthLineId = document.getElementById("fifthLineId");
fifthLineId.innerHTML = fifthLineId.innerHTML + " " + multipy_three_numbers(2,3,4);

//12
function areaOfCircle(radius) {
    return Math.PI * radius * radius;
};

var sixthLineId = document.getElementById("sixthLineId");
sixthLineId.innerHTML = sixthLineId.innerHTML + " " + areaOfCircle(5);

