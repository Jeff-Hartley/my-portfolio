//this is here because it helps with the form not actually submitting with the preventdefault
document.addEventListener("DOMContentLoaded", (event) => {
// variable for the button to show description of projects 
const descBtn = document.getElementsByClassName("showDescButton");

// for loop for the button 
for (let i = 0; i < descBtn.length; i++) {
    //event listener for the button click
    descBtn[i].addEventListener('click', function() {
            
        // Will apply to the next element in the same tree level, which would be the description for each project
        const projectDesc = descBtn[i].nextElementSibling;
            
        // If description is showing, button will say hide description. 
        if (projectDesc.style.display === 'none') {
            projectDesc.style.display = 'block'; 
            descBtn[i].textContent = 'Hide Description'; 
            
        // If description is hidden, button will say show description
        } else {
            projectDesc.style.display = 'none';
            descBtn[i].textContent = 'Show Description'; 
        }
    });
}



//variable for the submit form button
const submitFormBtn = document.getElementById("submitFormButton")

//variables for the inputs of the form as well as the form itself
const contactFormID = document.getElementById("contactFormID");
const nameInput = document.getElementById('nameInput');
const companyInput = document.getElementById('companyInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const messageInput = document.getElementById('messageInput');


//variables getting error elements for the registration form
const nameError = document.getElementById('nameError');
const companyError = document.getElementById('companyError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const messageError = document.getElementById('messageeError');

//success message for theform
const successMessage = document.getElementById('successMessage');


});

    contactFormID.addEventListener('submit', function(event) {
        //clears any previous error messages as well as the success message
        nameError.textContent = '';
        companyError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        messageError.textContent = '';
        successMessage.textContent = '';

        let isValid = true;

        // if statement for the name input
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name';
            isValid = false
        }

        // if statement for the company input
        if (companyInput.value.trim() === '') {
            companyError.textContent = 'Please enter your company name';
            isValid = false
        }

        // if/else statement for the email input
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Please enter your email';
            isValid = false
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false
        }

        // if statement for the phone # input
        if (phoneInput.value.trim() === '') {
            phoneError.textContent = 'Please enter your phone number';
            isValid = false
        }

        // if statement for the message input
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Please enter your message.';
            isValid = false
        }
        
        if (isValid) {
            event.preventDefault();
            nameInput.value = '';
            companyInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
            messageInput.value = '';
            successMessage.textContent = 'Form submitted successfully!'
        }

        
});

let validateEmail = (emailInput) => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(emailInput));
}

// variables using the elements of the HTML
const whoAreYou = document.getElementById('whoAreYou');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayWelcomeMsg = document.getElementById('displayWelcomeMsg');

//event listeners for the buttons so they call the functions needed
saveBtn.addEventListener('click', saveData);
clearBtn.addEventListener('click', clearData);

// code for the function to display the saved name
function displaySavedUsername() {
    const savedName = localStorage.getItem('who');
    if (savedName) {
        displayWelcomeMsg.textContent = `Welcome to my site, ${savedName}`;
    } else {
        displayWelcomeMsg.textContent = "Welcome to my site, stranger!";
    }
}

// function to save the data from the username input
function saveData() {
    const who = whoAreYou.value;
    localStorage.setItem('who', who);
    displaySavedUsername();
    whoAreYou.value = '';
}

// function to clear the data in the username input and display name field
function clearData() {
    localStorage.clear();
    displayWelcomeMsg.textContent = '';
    whoAreYou.value = '';
}

// Displays name when window loads up from localStorage
window.onload = displaySavedUsername;