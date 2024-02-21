$(document).keypress(function(event){
    $("h1").css("color","red");
    $("h1").text(event.key);
})