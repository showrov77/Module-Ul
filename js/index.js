console.log("Hello, Payment Solutions!");

document.getElementById("login-btn").addEventListener("click", function() {
    console.log("Login button clicked!");
    //1- get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    
    //2- get the pin input
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);
    //3- matvh pin & mobile number
    if (contactNumber === "01712345678" && pin === "1234") {
        //3-1 true:::>> alert home page
        alert("Welcome to the Home Page!");

       // window.location.replace("home.html");
        window.location.assign("home.html");
    } else {
        //3-2 false:::>> alert > return
        alert("Invalid mobile number or pin. Please try again.");
        return;
    }
  
});