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


})

