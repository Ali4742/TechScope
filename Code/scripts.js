// JavaScript function to validate the form
function validateForm() {
    //Declare function of the form
    let fname = document.forms["signupForm"]["fname"].value;
    let lname = document.forms["signupForm"]["lname"].value;
    let username = document.forms["signupForm"]["username"].value;
    let password = document.forms["signupForm"]["Password"].value;
    let email = document.forms["signupForm"]["email"].value;
    let phone = document.forms["signupForm"]["phonenumber"].value;
    let birthday = document.forms["signupForm"]["birthday"].value;

    //Alerts the user if some of the form is missing
    if (fname == "" || lname == "" || username == "" || password == "" || email == "" || phone == "" || birthday == "") {
        alert("All fields in the form must be filled");
        return false;
    }

    //Checks if the phone number is only numbers
    let phonePattern = /0123456789/;
    if (!phonePattern.test(phone)) {
        //shows a message if they don't write a phone number
        alert("Please enter only numbers for the phone number");
        return false;
    }

    //Shows a message to confirm the form is complete
    alert("Thank you for creating an account");
    return true;
}