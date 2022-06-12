const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

//console.log(input);

function error(i, message) {
    i.className = 'form-control is-invalid';
    const div = i.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(i) {
    i.className = 'form-control is-valid';

}
const checkEmail = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, 'check correct email');
    }

};


function checkRequired(inputs) {

    inputs.forEach(function (input) {
        if (input.value === '') {
            error(input, `${input.id} is required!!!`);
        } else {
            success(input);
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} olamlidir`);
    } else if (input.value.length > max) {
        error(input, `${input.id} en az ${max} olamlidir`);
    } else {
        success(input);
    }
}

function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        error(input2, 'password must be same!');
    }
};

function checkPhone(input) {
    var exp = /^\d{10}$/;

    if (!exp.test(input.value)) {
            error(input, 'minimum 10 symbol');
        }

};


form.addEventListener("submit", function (e) {
    e.preventDefault();


    checkRequired([username, email, phone, password, repassword]);
    checkEmail(email);
    checkLength(username, 7, 15);
    checkLength(password, 7, 14);

    checkPasswords(password, repassword);
    checkPhone(phone);

    //     if (username.value === '') {
    //         error(username, 'username sec ozune');
    //     } else {
    //         success(username);
    //     }


    //     if (email.value === '') {
    //         error(email, 'email yaz');

    //     }else if(!validateEmail(email.value)){
    // error(email, 'duzgun mailadres yaz');
    //     }     

    //     else {
    //         success(email);
    //     }
    //     if (phone.value === '') {
    //         error(phone,' nomre vacibdir');

    //     } else {
    //         success(phone);
    //     }
    //     if (password.value === '') {
    //         error(password, 'minimum 7 sinvol');

    //     } else {
    //         success(password);
    //     }
    //     if (repassword.value === '') {
    //         error(repassword, 'minimum7 sinvol');

    //     } else {
    //         success(repassword);
    //     }

});