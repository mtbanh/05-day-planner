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
})

})
