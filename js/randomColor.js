$(function() {

    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    $("div.slider").css({
    
        backgroundColor: '#' + randomColor
    
    });
    
    $("#colorcode").text("#" + randomColor);

});