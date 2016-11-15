// Script 10.7- register.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.

function validateUsername (username, message) {
    //Validates that username meets the following criteria:
    //1. Must be at least 8 characters long
    //2. First character must be A-z or a-z
    //3. Must contain at least on digit (0-9)
    //Function returns true if all criteria is met and false if
    //any criteria is not met

    var char1;
    var hasNumber;

    //Check username length
    if (username.length < 8) {
        message.valueOf = "Username must be at least 8 characters";
        return false;
    }
    //Check first character:
    char1 = username.substr(0,1).toUpperCase();

    if (!(char1 >= "A" && char1 <= "Z")) {
        message.valueOf = "First character must be A-Z or a-z";
        return false;
    }

    //Check for at least on digit or numeral
    hasNumber = /\d/;
    if (!(hasNumber.test(username))) {
        message.valueOf = "Username must contain one numeral or non-alphabetic character";
        return false;
    }
     /*
     //Alternate Version:
     var anyDigits = false;
     while (!(anyDigits)) {
         for (var i = 1; i < username.length; i++){
             char1 = username.substr(i, 1);
             if(char1 >= "0" && char1 <= "9"){
                 anyDigits = true;
                 break;
             }
         }
         if (! (anyDigits)) {
             return false;
         }
     }
*/

    //Otherwise all criteria met:
    return true;
}

function validateForm(e) {
    'use strict';

    if (typeof e == 'undefined') {
        //This is a browser window-generated event
        e = window.event;
    }

    //Get form references:
    var firstName = U.$('firstName');
    var lastName = U.$('lastName');
    var userName = U.$('userName');
    var email = U.$('email');
    var phone = U.$('phone');
    var city = U.$('city');
    var state = U.$('state');
    var zip = U.$('zip');
    var terms = U.$('terms'); //We'll populate these later

    //error flag:
    var error = false;

    //Validate the first name using a
    //regular expression:
    if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
        // Everything between / and / is the expression
        //Any letter A-Z (case insensitive) is valid
        //Spaces, periods, and hyphens are valid
        //name must be 2 - 20 characters long

        //First name matches the expression
        //and is valid
        //alert("Valid first name");
        removeErrorMessage('firstName');
    }
    else {
        //alert("Invalid first name");
        addErrorMessage('firstName', 'Invalid/Missing first name');
        error = true;
    }
    //Validate the last name using regular expression:
    if (/^[A-Z \.\-']{2,20}$/i.test(lastName.value)) {

        removeErrorMessage('lastName');
    }
    else {

        addErrorMessage('lastName', 'Invalid/Missing last name');
        error = true;
    }
    //Validate username using validateUsername function:
    var msg = "initial message";
    msg = Object(msg);
    if(validateUsername(userName.value, msg)) {
        //The username meets the requirements
        removeErrorMessage('userName')
    }
    else {
        //The username is not valid
        addErrorMessage('userName', msg.valueOf);
        error = true;
    }
    //Validate username using regular expression:
    if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/i.test(email.value)) {

        removeErrorMessage('email');
    }
    else {

        addErrorMessage('email', 'Invalid/Missing email');
        error = true;
    }

    //Validate the phone number by using regular expression:
    if (/^\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}$/i.test(phone.value)) {

        removeErrorMessage('phone');
    }
    else {

        addErrorMessage('phone', 'Phone number must be in XXX-XXX-XXXX or XXX.XXX.XXXX format');
        error = true;
    }

    //Validate the zip code by using regular expression:
    if (/^\d{5}(\-\d{4})?$/i.test(zip.value)) {

        removeErrorMessage('zip');
    }
    else {
        addErrorMessage('zip', 'Invalid/Missing zip code');
        error = true;
    }


    if (error) {
        if(e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
    }

    return false;
} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	'use strict';
    
} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

    //addEvent requires three pieces of info:
    //1. The object to add the event listener to
    //2. The event to listen for
    //3. The function to call in response to
    //  the event in #2
    U.addEvent(
        U.$('theForm'),
        'submit',
        validateForm);


};