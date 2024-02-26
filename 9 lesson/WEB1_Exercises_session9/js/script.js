$('#exampleButtonId').click(function() {
    var attributeContent = $('#imageId').attr("src");
    $(this).text(attributeContent);
});

//1
$('#fontSizeChangeButtonId').click(function() {
    var fontSize = $('h2').css("font-size","40px");
    $(this).text(fontSize);
});

//2
$('#textButtonId').on("click", function() {
    $(this).text('Hello JavaScript');
});

//3
$('#imageId').on("click", function() {
    $(this).attr("src", "images/glad.jpg");
});

//below this doesnt work
    // if ($(this).attr("src") == "images/glad.jpg") {
    //     $(this).click( function() {
    //         attr("src", "images/sad.jpg");
    //     });
    // } 

    // else if($(this).attr("src") == "images/sad.jpg") {
    //     $(this).click( function() {
    //         attr("src", "images/glad.jpg");
    //     });
    // }

//4
var counter = 0;
$('#increaseButtonId').click(function() {
    counter++;
});

$('#decreaseButtonId').click(function() {
    counter--;
});


$('#spanFieldId').void(function() {
    $(this).text(counter);
});

//5
// $("#spanFieldId").on("click", function() {
//     var value = $("value").attr("value");
//     $(this).text(value);
// });

// $("li").each("onclick", function(){
//     var idValue = $(this).attr("id");
//     $(this).text("Id of this li is" + idValue);
// });

// $("li").on("click", function(){
//     var liValue = $("li").attr("value");
//     $("spanFieldId").text("You pressed li with the value of " + itemId);
// });

//6
$(document).ready(function(){      
    $(document).mousemove(function(event){
    $('#xcoordId').text(event.pageX);
    $('#ycoordId').text(event.pageY);
    }); 
});

$(document).ready(function(){      
    $(document).mousemove(function(event){
    $('#mousePosition').html('Your mouse is currently at: ' 
                                    + event.pageX +', '+ event.pageY);
    }); 
});

$("textfield").keydown(function(event){
    var kexVal = event.which;
    var xCoord = event.pageX;
    var yCoord = event.pageY;
});

('#xcoordId').on("click", function() {
    $(this).text(xCoord);
});


//7
var colors = [blue, red, yellow, green];
var mathRandom = Math.floor(Math.random() * colors.length);

$("colorBox1Id").on("mouseenter", function() {
    var background = $("colorBox1Id").css({"background-color" : "red"});
    $(this).css(background);
});


