const FORM = document.forms[0];
const firstName = FORM.querySelector(".input_field #FirstName");
const lastName = FORM.querySelector(".input_field #LastName");
const email = FORM.querySelector(".input_field #Email_Address");
const passwordd = FORM.querySelector(".input_field #password");

FORM.addEventListener("submit", (e)=>{
    e.preventDefault();

    let regExp = /\w@gmail.com$/;
    let regName = /[A-Z][a-z]/;
    let regPassword =/./;
    let validfirstName = regName.test(firstName.value);
    let validlastName = regName.test(lastName.value);
    let validMail = regExp.test(email.value);
    let securityPass = regPassword.test(passwordd.value);
    
    if(validfirstName==false){
        firstName.nextElementSibling.style.display = "block";
    }else{
        firstName.nextElementSibling.style.display = "none";
    }

    if(validlastName==false){
        lastName.nextElementSibling.style.display = "block";
    }else{
        lastName.nextElementSibling.style.display = "none";
    }

    if(validMail==false){
        email.nextElementSibling.style.display = "block";
    }else{
        email.nextElementSibling.style.display = "none";
    }

    if(securityPass==false){
        passwordd.nextElementSibling.style.display = "block";
    }else{
        passwordd.nextElementSibling.style.display = "none";
    }
 
});