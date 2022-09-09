//Will check the credentials which are provided while login
//Submit Button
function Verify() {
  var userRef = "SuperBob";
  var passRef = "KPMGSolution";
  
  var user =  document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == userRef && pass == passRef) {
	  //Once verified, it will redirect to Home Page
	  window.open("HomePageAfterLogin.html");
  } else {
  alert("It's seem you make a mistake...")
  }
};