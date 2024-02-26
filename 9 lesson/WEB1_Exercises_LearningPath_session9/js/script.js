$(document).ready(function() {
    // Call to function
    $("#orangeBoxId").animate({left: "+=200"},"slow",function() {squareMovement(this)});
});

// Declaration of function
function squareMovement(IdRef) {
    $(IdRef).animate({top: "+=100"}).animate({left: "+=100"}).animate({top: "-=100"}).animate({left: "-=100"}, function(){squareMovement(IdRef);});
}

//1
$("#orangeBoxId").on("click", function(){
    $(this).hide();
})

$("#greenBoxId").on("click", function(){
    $(this).hide();
})

$("#redBoxId").on("click", function(){
    $(this).hide();
})

$("#blueBoxId").on("click", function(){
    $(this).hide();
})

//2
$("#showButtonId").on("click", function(){
    $("#orangeBoxId").show();
    $("#greenBoxId").show();
    $("#redBoxId").show();
    $("#blueBoxId").show();
});

//3
var documentHeight = $(document).height();
var windowHeight = $(window).height();

//Add an event listener to the "document" object so when you press one of the arrow buttons, the blue box will move in that direction. Arrow key codes: left 37, up 38, right 39, down 40.
$(document).on("keydown", function(event){
    if(event.which == 37){
        $("#blueBoxId").animate({left: "-=50"});
    } else if(event.which == 38){
        $("#blueBoxId").animate({top: "-=50"});
    } else if(event.which == 39){
        $("#blueBoxId").animate({left: "+=50"});
    } else if(event.which == 40){
        $("#blueBoxId").animate({top: "+=50"});
    }
});

//4
// function squareMovement(IdRef) {
//     $(IdRef).animate({top: "+=100"}).animate({left: "+=100"}).animate({top: "-=100"}).animate({left: "-=100"}, function(){squareMovement(IdRef);});
// }

//5
$("#stopButtonId").on("click", function(){
    $("#orangeBoxId").stop();
});

//6
$("#startButtonId").on("click", function(){
    squareMovement("#orangeBoxId");
});

//7
$("#greenBoxId").on("mouseover", function(){    
    var randomLeft = Math.floor(Math.random() * (windowWidth - 100));
    var randomTop = Math.floor(Math.random() * (windowHeight - 100));
    $(this).animate({left: randomLeft, top: randomTop});
});