"use strict"

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

function game(){
    let dieDisplay = document.getElementById("random");
    let gameMessage = document.getElementById("gameMsg");
    let dice = getRandomNumber(1, 10);

    dieDisplay.innerHTML = dice;
    if(dice === getRandomNumber(1, 10)){
        gameMessage.innerHTML = "Congratulations! You win!";
    }

    else{
        gameMessage.innerHTML = "Sorry you lost. Try again.";
      }
}
document.getElementById("gameBtn").addEventListener("click", game);


let messages = {
    success: "The form was submitted successfully",
    failure: "There was an issue when trying to submit the form, please try again",
    nameMsg: "Must include letters a-z",
    emailMsg: "Please enter a valid email address",
    phoneMsg: "Please enter a valid phone number"
};

let newUser = {
    userName: "",
    userEmail: "",
    userPhone: "",
    userPrefer: "",
    getUser() {
        return "<strong>Full Name:</strong> " + this.userName + "<br><strong>Email:</strong> " + this.userEmail + "<br><strong>Phone Number:</strong> " + this.userZipCode + "<br><strong>Contact Preference:</strong> " + this.userPrefer;
      }
};


function validateForm(event){
    event.preventDefault();

    // the inputs
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let fieldset = document.querySelector("fieldset");
    let confirm = document.getElementById("confirm");

     // the regular expressions
    let nameRegex = /[a-zA-Z]/;
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})$/;
    let phoneRegex = /^\d{10}$/

     //remove the border class given to inputs on previous submit of error
    name.classList.remove("error");
    email.classList.remove("error");
    phone.classList.remove("error");

    confirm.classList.add("hidden");

    //if form is valid
    let isValid = true;
    //Email
    if(email.value === "" || !(emailRegex)){
        //form is not valid right now
        isValid = false;
        //error class
        email.classList.add("error");
        //error message
        email.nextElementSibling.classList.remove("hidden");
        //display error msg
        console.error(messages["emailMsg"]);
    }else{
        //if valid
        newUser.userEmail = email.value;
    }

    //First and Last name
    if(name.value === "" || name.value.length < 10 || !(nameRegex.test(name.value))){
        //form is not valid right now
        isValid = false;
        //error class
        name.classList.add("error");
        //error message
        name.nextElementSibling.classList.remove("hidden");
        //display error msg
        console.error(messages["nameMsg"]);
    }else{
        newUser.userName = name.value;
    }

    //Phone
    if(phone.value === "" || !(phoneRegex.test(phone.value))){
         //form is not valid right now
         isValid = false;
         //error class
         name.classList.add("error");
         //error message
         name.nextElementSibling.classList.remove("hidden");
         //display error msg
         console.error(messages["phoneMsg"]);
     }else{
         newUser.userPhone = phone.value;
     }

     //if submission is valid
    if(isValid){
        displaySubmission();
        // reset values
        name.value = "";
        email.value = "";
        phone.value = "";

        // clear out any error messages
        name.nextElementSibling.classList.add("hidden");
        email.nextElementSibling.classList.add("hidden");
        phone.nextElementSibling.classList.add("hidden");

        // display the success message from the map to the user
        window.alert(messages["success"]);
    }
}

function displaySubmission(){
    confirm.innerHTML = "<strong class=\"large\">Your Information:</strong><br>";
}

function mapMessages(){
    let html = "";
    let messageKeys = Object.keys(messages);
    console.log(messageKeys);
    if("success" in messages){
        console.log("The messages map does contain the \"success\" key");
      }
}

// event listener
document.getElementById("mySubmit").addEventListener("submit", validateForm);
// call to our map function
mapMessages();

document.querySelector("#darkmode img").addEventListener("click", function(){
    document.querySelector("#container img").classList.toggle("btnClick");
});



