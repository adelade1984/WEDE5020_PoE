

function checkUserStatus() {
    //declare and assign variables
    //getting the values frm the form
    
    let name = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phoneNumber = document.getElementById("phonenumber").value;
    
    //clear validation messages
    document.getElementById("fError").innerHTML = "";
    document.getElementById("lError").innerHTML = "";
    document.getElementById("email_Error").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("phoneNumberError").innerHTML = "";
    
    //adding a flag
    let valid = true;
    
    //checking if the name is empty
    if (name == "") {
        document.getElementById("fError").innerHTML = "Please enter your name, name should not be null";
        valid = false;
    }
    
    //checking if the last name is empty
    if (lastName == "") {
        document.getElementById("lError").innerHTML = "Please enter your lastname, lastname should not be null";
        valid = false;
    }
    
    //checking if the email is empty and if it is valid
    if (email == "") {
        document.getElementById("email_Error").innerHTML = "Please enter your email, email should not be null";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("email_Error").innerHTML = "Please enter a valid email address.";
        valid = false;
    }
    
    //checking if the password is empty and if it is valid
    if (password == "") {
        document.getElementById("passwordError").innerHTML = "Please enter your password, password should not be null";
        valid = false;
    } else if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long";
        valid = false;
    }
    
    //checking if the phone number is empty and if it is valid
    if (phoneNumber == "") {
        document.getElementById("phoneNumberError").innerHTML = "Please enter your phone number, phone number should not be null";
        valid = false;
    } else if (!/^\+?[0-9]{10,15}$/.test(phoneNumber)) {
        document.getElementById("phoneNumberError").innerHTML = "Enter a valid phone number (10-15 digits).";
        valid = false;
    }
    
    //stop the submission if any field is invalid
    if (valid == false) {
        return false;
    }
    
    //displaying the results if the fields are valid
    document.getElementById("result").innerHTML = "Registration successful";
    
    return false;
}