//write your code below this line
console.log("lalala");
var myArray = ["red","green","blue","black","white"];
var random = Math.floor((Math.random() * myArray.length));
console.log(random);
var textF = document.getElementsByTagName("li");
var firstlistitem = textF[0];
firstlistitem.innerHTML += myArray[random];

var colorsLi = document.getElementById("colors");

for(i = 0; i < myArray.length; i++){
    colorsLi.innerHTML += myArray[i] + "<br>";
}

function days_since(day, month, year){
    return((new Date()) - new Date(year,month, day))/(1000 * 60 * 60 * 24);
}

function days_odd_or_even(day, month, year){
    var days = days_since(day, month, year);
    if (days % 2 == 0){
        return "even";
    }

    else return "odd";
}

increment(1, 1000, "counter1Id");
increment(2, 1000, "counter2Id");
function increment(value, time ,id){
    var times = 0;
    var counter = 0;
    var interval = setInterval(function(){
        if (times < 10){
            counter += value;
            document.getElementById(id).innerHTML = "Counter: " + counter;
            times++;
        }
        else {
            clearInterval (interval);
        }
    }, time);
}
