function getFormvalue() {
    var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
	var Submit=document.getElenmentById("submit");
	Submit.addEventListener("click", myFunction);
	function myFunction(firstName,lastName) {
		alert("First Name: " + firstName + ", Last Name: " + lastName);
	}
}
