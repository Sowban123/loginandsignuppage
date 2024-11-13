document.querySelector("form")
.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("email");
    
    
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    
    if (!email.value || !password.value) {
        alert("enter email & password to login ");
     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        alert("Invalid email");
     }
    }
    else{
        alert("login successful");
        email.value ="";
        password.value="";
    }
});
 gsap.from("#WELCOME",{
    y: 500,
    duration: 6,
    delay:1,
    backgroundColor: "black"

 })
 
