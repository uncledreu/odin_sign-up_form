document.addEventListener("DOMContentLoaded", function(){

    let passwordValue = document.querySelector("#password").value;
    let confirmPasswordValue = document.querySelector("#confirmPassword").value;

    let errorMessage = document.querySelector(".error");

  //

    if(confirmPasswordValue != passwordValue){
        errorMessage.textContent = "*password do not match"
        document.getElementById("#confirmPassword").style.border = "1px solid red";
        document.getElementById("#password").style.border = "1px solid red";

    }

})

errorMessage();


console.log("I'm working")