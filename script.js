const form = document.getElementById('form');
const profName = document.getElementById('profName');
const instName = document.getElementById('instName');
const hcpType = document.getElementById('hcpType');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zip = document.getElementById('zip');
const phone = document.getElementById('phone');
const contactTime = document.getElementById('contactTime');
const email = document.getElementById('email');
const response = document.getElementById('response');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
    //const request = new XMLHttpRequest();

    //request.open("post", "index.html")
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
 const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const formValue = formValue.value.trim();
    const profNameValue = profNameValue.value.trim();
    const instNameValue = instNameValue.value.trim();
    const hcpTypeValue = hcpTypeValue.value.trim();
    const cityValue = cityValue.value.trim();
    const stateValue = stateValue.value.trim();
    const zipValue = zipValue.value.trim();
    const phoneValue = phoneValue.value.trim();
    const contactTimeValue = contactTimeValue.value.trim();
    const emailValue = emailValue.value.trim();
    const responseValue = responseValue.value.trim();

    if(profNameValue === '') {
        setError(profName, 'Name of Healthcare Professional is required');
    } else {
        setSuccess(profName);
    }

    if(instNameValue === '') {
        setError(instName, 'Institution/Practice Name is required');
    } else {
        setSuccess(instName);
    }

    if(hcpTypeValue === '') {
        setError(hcpType, 'Type of HCP is required');
    } else {
        setSuccess(hcpType);
    }

    if(cityValue === '') {
        setError(city, 'City is required');
    } else {
        setSuccess(city);
    }

    if(stateValue === '') {
        setError(state, 'State is required');
    } else {
        setSuccess(state);
    }

    if(zipValue === '') {
        setError(zip, 'ZIP is required');
    } else {
        setSuccess(zip);
    }

    if(phoneValue === '') {
        setError(phone, 'Phone Number is required');
    } else {
        setSuccess(phone);
    }

    if(contactTimeValue === '') {
        setError(contactTime, 'Best Contact Time is required');
    } else {
        setSuccess(contactTime);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);

        console.log("Hello world!");
    }

    if( responseValue === '') {
        setError(response, 'Preferred Response Method is required');
    } else {
        setSuccess(response);
    }
    
}

function sendMail() {
    var link = "mailto:gvanatta@harrowinc.com"
             + "?cc=myCCgvanatta@harrowinc.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}


