//TODOs:

//Part1: creating the static html elements that contain the time block which includes time | text area | and save button
    //utilize bootstraps grid to create a container that has three columns and 9 rows:
        //time container(1/6) with the text corresponding to each hours from 9-5;
        //text area container(4/6) blank and static unless click on;
        //save container(1/6) with the save icon and is responsive to click;

//Part2: creating text-area that user can type and store that value in local storage when they click the save btn
    //local storage that will store the object containing the key time and value = text value;

//part3: time element that will gray out the block of time once current time reaches 00:00

$(document).ready(function () {


$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//TODO: need to create a function that will keep track of the current hour and change the style of the time block to reflect it
//while loop(?) to check if the current hour is > than row; change style to be gray, else if (hour = row) change style to be white and else change style to be green
var currentTime = moment().format("h:mm");

//on click event save btn will do the following:
//save the user-input value to local storage with the corresponding data-time

$("#saveBtn9").on("click", function(event){
    event.preventDefault();
    var userInput = $("#user-input-9").val()
    // console.log($("#user-input").val())
    console.log(userInput)
    localStorage.setItem("user-input-9", JSON.stringify(userInput));
})
$("#saveBtn10").on("click", function(event){
    event.preventDefault();
    var userInput = $("#user-input-10").val()
    // console.log($("#user-input").val())
    console.log(userInput)
    localStorage.setItem("user-input-10", JSON.stringify(userInput));
})
$("#saveBtn11").on("click", function(event){
    event.preventDefault();
    var userInput = $("#user-input-11").val()
    // console.log($("#user-input").val())
    console.log(userInput)
    localStorage.setItem("user-input-11", JSON.stringify(userInput));
})
$("#saveBtn12").on("click", function(event){
    event.preventDefault();
    var userInput = $("#user-input-12").val()
    // console.log($("#user-input").val())
    console.log(userInput)
    localStorage.setItem("user-input-12", JSON.stringify(userInput));
})
$("#saveBtn13").on("click", function(event){
    event.preventDefault();
    var userInput = $("#user-input-13").val()
    // console.log($("#user-input").val())
    console.log(userInput)
    localStorage.setItem("user-input-13", JSON.stringify(userInput));
})
$("#saveBtn14").on("click", function(event){
    event.preventDefault();
    var userInput = $("#user-input-14").val()
    // console.log($("#user-input").val())
    console.log(userInput)
    localStorage.setItem("user-input-14", JSON.stringify(userInput));
})
$("#saveBtn15").on("click", function(event){
    event.preventDefault();
    var userInput = $("#user-input-15").val()
    // console.log($("#user-input").val())
    console.log(userInput)
    localStorage.setItem("user-input-15", JSON.stringify(userInput));
})
$("#saveBtn16").on("click", function(event){
    event.preventDefault();
    var userInput = $("#user-input-16").val()
    // console.log($("#user-input").val())
    console.log(userInput)
    localStorage.setItem("user-input-16", JSON.stringify(userInput));
})
$("#saveBtn17").on("click", function(event){
    event.preventDefault();
    var userInput = $("#user-input-17").val()
    // console.log($("#user-input").val())
    console.log(userInput)
    localStorage.setItem("user-input-17", JSON.stringify(userInput));
});

//create a function that will retrieve any stored input and display it in the appropriate area

function init(){
    var storedUserInput9 = JSON.parse(localStorage.getItem("user-input-9"));
    if (storedUserInput9 !== null) {
        $("#user-input-9").text(storedUserInput9)
    }
    var storedUserInput10 = JSON.parse(localStorage.getItem("user-input-10"));
    if (storedUserInput10 !== null) {
        $("#user-input-10").text(storedUserInput10)
    }
    var storedUserInput11 = JSON.parse(localStorage.getItem("user-input-11"));
    if (storedUserInput11 !== null) {
        $("#user-input-11").text(storedUserInput11)
    }
    var storedUserInput12 = JSON.parse(localStorage.getItem("user-input-12"));
    if (storedUserInput12 !== null) {
        $("#user-input-12").text(storedUserInput12)
    }
    var storedUserInput13 = JSON.parse(localStorage.getItem("user-input-13"));
    if (storedUserInput13 !== null) {
        $("#user-input-13").text(storedUserInput13)
    }
    var storedUserInput14 = JSON.parse(localStorage.getItem("user-input-14"));
    if (storedUserInput14 !== null) {
        $("#user-input-14").text(storedUserInput14)
    }
    var storedUserInput15 = JSON.parse(localStorage.getItem("user-input-15"));
    if (storedUserInput15 !== null) {
        $("#user-input-15").text(storedUserInput15)
    }
    var storedUserInput16 = JSON.parse(localStorage.getItem("user-input-16"));
    if (storedUserInput16 !== null) {
        $("#user-input-16").text(storedUserInput16)
    }
    var storedUserInput17 = JSON.parse(localStorage.getItem("user-input-17"));
    if (storedUserInput17 !== null) {
        $("#user-input-17").text(storedUserInput17)
    }
}   
init()

function color(){
    $(".time-block").each(function(){
        var hour = parseInt($(this).attr("id"));
        console.log(hour);

        if (hour > currentTime){
            $(this).addClass("past");
        } else if (hour === currentTime){
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
color()

    
})


//create a for loop that will iterate through the txt value for data-text and 