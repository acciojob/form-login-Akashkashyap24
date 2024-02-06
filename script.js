function getFormvalue() {
    // Get the input fields
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var Submit = document.getElementById("submit").value;

    // Add an event listener to the submit button
    Submit.addEventListener("click", function() {
        // Get the value of the input fields and show them in an alert
        alert(firstName.value +" "+ lastName.value);
    });
}