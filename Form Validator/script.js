const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');  
const password = document.getElementById('password');  
const password2 = document.getElementById('password2'); 

//show input error message
const showError = function(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success outline
const showSuccess = function(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email is valid
const checkEmail = function(input){
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input, 'Email is not valid');
    }
}

//Check required fields
const checkRequired = function(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`)
        }
        else {
            showSuccess(input);
        }
    });
}

//Check input length
const checkLength = function(input, min, max){
    if(input.value.length<min){
        showError(input, `${getFieldName(input)} must be a least ${min} characters`);
    }
    else if(input.value.length>max) {
        showError(input, `${getFieldName(input)} must be a less than ${max}`);
    }
    else{
        showSuccess(input);
    }

    // if(input.value.length>min && input.value.length<max){

    // }
}

// Check passwords match
const checkPasswordMatch = function(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match')
    }
}

//Get FieldName
const getFieldName = function(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

//Event Listener
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2 ]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2 );
    
})

