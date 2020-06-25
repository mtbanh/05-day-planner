# Day Planner

## About the project

This application allows user to edit their schedule for the day in increments of standard working hours of 9AM - 5PM. The application also dynamically update the hours so that the user will know when a certain time has elapsed. Finally, the user's schedule will be saved even when the application is closed. 

---

## Getting started
Below are the prerequisite understanding and programs that were utilized :
* Visual Studio Code-click [here](https://code.visualstudio.com/) to a tutorial to install
* Github repository-click [here](https://help.github.com/en/github/)
* Bootstrap-click [here](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

* jQuery-click [here](https://code.jquery.com/jquery-3.4.1.min.js)

* aJax- click [here](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js)
---

## Code spotlight

The code snippet below store the user's input into local storage upon clicking save for later retrieval.
```js
{
    $("#saveBtn10").on("click", function(event){
    event.preventDefault();
    var userInput = $("#user-input-10").val()
    console.log(userInput)
    localStorage.setItem("user-input-10", JSON.stringify(userInput));
});

}
```

---

## Deployed link

[Live site](https://mtbanh.github.io/05-day-planner/)
---

## Author

**Mai Banh**
- [Link to Github](https://github.com/mtbanh)
- [Link to LinkedIn](https://www.linkedin.com/in/mai-banh-311ba6164/)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Acknowledgments
Thank you to Joel, Isaias, Colin, and Ayla for helping out! 