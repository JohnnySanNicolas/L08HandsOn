$(document).ready(function(){
    $("#headerTitle").hover(function(){
        $(this).css("background-color", "red");
    }, function(){
        $(this).css("background-color", "darkcyan");
    });

    $("#pTextLink").click(function(){
        $(this).text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it.")
    });
    
    $(".listItems").dblclick(function(){
        $(this).hide();
    });

    $("input").keydown(function(){
        $(this).toggleClass("input");
    });

   /* $(".input").keydown(function(){
        $(this).css("color", "blue");
    });
    $(".input").keyup(function(){
        $(this).css("color", "red");
    });*/
});