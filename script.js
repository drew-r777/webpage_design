//ABOUT PAGE
//Javascript for accordion widget
$(document).ready(function() {
    //ajax call that retrieves 4 images from info.json file for the cogdemo page.
    $.ajax({
        type: "get",
        url: "info.json",
        dataType: "json",
        success: function(data){
            $.getJSON("info.json", function(data){
                $.each(data, function(){
                    $.each(this, function(i,item){
                        $("#info").append('<img src=' + item.img + '>');
                    });
                });

            })
        }

    });

    //magic words page content
    $.ajax({
        type: "get",
        url: "magic.json",
        dataType: "json",
        success: function(data){
            $.getJSON("magic.json", function(data){
                $.each(data, function(){
                    $.each(this, function(i,item){
                        var inLineCode = '';
                        inLineCode += '<h2>' + item.title + '</h2><br><h3>'+ item.desc +'</h3><p>';
                        item.words.forEach(function(item, index) {
                            inLineCode += item + '<br>';
                        });
                        inLineCode += '</p>';
                        if(item.img != "") {
                            inLineCode += '<img src=' + item.img + '>';
                        }
                        $("#magic").append(inLineCode);
                    });
                });

            })
        }

    });

    $("#tabs").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    $('.slider').bxSlider({
        auto: true,
        pause: 3000,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 20,
        slideWidth: 900,
        moveSlides: 1,

    });


});

//javascript to emebed youtube video
//https://developers.google.com/youtube/iframe_api_reference
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


//Api frame w/ values for size and video id
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '400',
        width: '640',
        videoId: 'J7vxRT64YhU',
    });
}

//function to play the video
function onPlayerReady(event) {
    event.target.playVideo();
}

//Battle simulator code
//Var for each cog
var cogLvl1 = null;
var cogLvl2 = null;
var cogLvl3 = null;
var cogLvl4 = null;

window.onload = function() {
    //get value in each select element
    cogLvl1 = document.getElementById("level");
    cogLvl2 = document.getElementById("level2");
    cogLvl3 = document.getElementById("level3");
    cogLvl4 = document.getElementById("level4");

    //function call to display result health
    document.getElementById("submit").onclick = displayResult;
};

function displayResult() {
    var val1 = cogLvl1.value;
    var val2 = cogLvl2.value;
    var val3 = cogLvl3.value;
    var val4 = cogLvl4.value;
    alert ("Cog 1 is level: " + val1  + " and has " + calculateHealth(val1) + " hitpoints.\n" +
        "Cog 2 is level: " + val2  + " and has " + calculateHealth(val2) + " hitpoints.\n" +
        "Cog 3 is level: " + val3  + " and has " + calculateHealth(val3) + " hitpoints.\n" +
        "Cog 4 is level: " + val4  + " and has " + calculateHealth(val4) + " hitpoints.");
}

//function to calculate health
function calculateHealth(num) {
    return ((parseInt(num) + 1) * (parseInt(num) + 2));
};
