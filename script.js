function getFormvalue() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
	var Submit=document.getElenmentById("Submit").value;
	Submit.addEventListener("click", myFunction);
	function myFunction(firstName,lastName) {
		alert("First Name: " + firstName + ", Last Name: " + lastName);
	}
}
