function getFormvalue() {
   var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var Submit = document.getElementById("submit");

    Submit.addEventListener("click", function() {
        alert("First Name: " + firstName.value + ", Last Name: " + lastName.value);
    });
}
