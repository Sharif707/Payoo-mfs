document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const phoneNum = document.getElementById("phone-number").value;
  const pinNum = document.getElementById("pin-number").value;
 if(phoneNum === 11 && pinNum === 12345){
    window.location.href = "http://www.w3schools.com"
 }
});
