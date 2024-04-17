var userEmailEl = document.getElementById("userEmail");
var mobileError = document.getElementById('mobileError')


var userPasswordEl = document.getElementById("userPassword");
var passwordError = document.getElementById("passwordError");

var formSubmitEl = document.getElementById("formSubmit");


const emailValidator= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileValidator = /^\d{10}$/;


function validateEmail(){
    var validEmail = validMobile = false;

    emailValidator.test(userEmailEl.value) ? ( validEmail =true) :  null;
    mobileValidator.test(userEmailEl.value) ? (validMobile=true ) : null;

    if (!(validEmail || validMobile )){
        mobileError.style.display = 'block';
        userEmailEl.value="";
    }
    else{
        userEmailEl.value="";
    }

}


function validatePassword(){
    if((userEmailEl.value.length<=4) || (userEmailEl.value.length>60)){
        passwordError.style.display='block';
    }
}






formSubmitEl.addEventListener('submit',function(event){
    event.preventDefault();
    validateEmail();
    validatePassword();
    
})