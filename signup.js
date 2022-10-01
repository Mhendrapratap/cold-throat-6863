function openWindow(){
    window.open("signin.html");
}

document.querySelector("form").addEventListener("submit",addData);
let signInarr = JSON.parse(localStorage.getItem("signInData"))||[];
function addData(event){
    event.preventDefault();
    let signInData = {
    firstName : document.getElementById("fname").value,
    lastName : document.getElementById("lname").value,
    emailId : document.getElementById("email").value,
    password : document.getElementById("pass").value
  }
  signInarr.push(signInData);
  localStorage.setItem("signInData", JSON.stringify(signInarr));
  alert("Successfully account created");
  window.location.reload()
}