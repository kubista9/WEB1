

$.get("xml/sepclassmates.xml", function (xml, status) {
    var txt = "<table class='myClass'><tr><th class='myClass'>Firstname</th><th class='myClass'>Lastname</th><th class='myClass'>Good at Java</th><th class='myClass'>Works in Rema</th><th class='myClass'>Do you want to see him in week 47?</th></tr>";
    $(xml).find("person").each(function(){
        var firstname = $(this).find("firstname").text();
        var lastname = $(this).find("lastname").text();
        var goodatjava = $(this).find("goodatjava").text();
        var worksinrema = $(this).find("worksinrema").text();
        var doyouwanttoseehiminweek47 = $(this).find("doyouwanttoseehiminweek47").text();
        txt += "<tr><td class='myClass'>" + firstname + "</td><td class='myClass'>" + lastname + "</td><td class='myClass'>" + goodatjava + "</td><td class='myClass'>" + worksinrema + "</td><td class='myClass'>" + doyouwanttoseehiminweek47 + "</td></tr>";
    });
    txt += "</table>";
    $("#textField1").html(txt);
});











