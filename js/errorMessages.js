// Script 10.1 - errorMessages.js
// This script defines functions for adding and removing error messages.

// This function adds the error message.
// It takes two arguments: the form element ID and the message.
function addErrorMessage(id, msg) {
   	'use strict';

	//Get a reference to the srred input
	var elem = U.$ (id);

	//Create a new id for a span error
	var newId = id + "Error";
	//i.e firstNameError for firstName

	//Span might already exist
	var span = U.$ (newId);
	if (span) {
		span.firstChild.value = msg;
	}
	else {
		//span doesn't already exsist add it
		span = document.createElement("span");
		span.id = newId;
		span.className = "error";
		span.appendChild(
			document.createTextNode(msg)
		);

        //Add span to the parent control;
        //to the RIGHT of the input box
        elem.parentNode.appendChild(span);
        //and to the LEFT of the input box,
        //update the label:
        elem.previousSibling.className = "error";
}

} // End of addErrorMessage() function.

// This function removes the error message.
// It takes one argument: the form element ID.
function removeErrorMessage(id) {
   	'use strict';

    //Removes error message if exist. Does nothing if there
    //is no error message
    var span = U.$(id + "Error");
    if (span) {
        //Remove red text from the label,
        //aka the sibling of the sibling (input)
        span.previousSibling.previousSibling.className = null;

        //Remove the span completely
        span.parentNode.removeChild(span);
        //The parent of the span is a div tag,
        //so remove the child tag from the parent
    }
} // End of removeErrorMessage() function.