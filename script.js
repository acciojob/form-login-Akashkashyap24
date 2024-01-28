function getFormvalue() {
    // Get the input fields
    var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var Submit = document.getElementById("submit");

    // Add an event listener to the submit button
    Submit.addEventListener("click", function() {
        // Get the value of the input fields and show them in an alert
        alert("First Name: " + firstName.value + ", Last Name: " + lastName.value);
    });
}