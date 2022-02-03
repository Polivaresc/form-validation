const emailInput = document.querySelector('#email-input')
const continentInput = document.querySelector('#continent-input')
const zipInput = document.querySelector('#zip-input')
const passwordInput = document.querySelector('#password-input')
const confirmationInput = document.querySelector('#password-confirmation')


function validateMail() {
    const emailError = document.querySelector('#email-error')
    if (emailInput.validity.typeMismatch) {
        emailError.textContent = 'Write a valid email address'
    } else {
        emailError.textContent = ''
    }
}

function validateContinent() {
    const continents = ['africa', 'america', 'asia', 'oceania', 'europe', 'anctartica', 'pangea']
    const continent = continents.find((c) => c === continentInput.value.toLowerCase())
    const continentError = document.querySelector('#continent-error')
    if(!continent) {
        continentError.textContent = 'This is not a continent'
    } else {
        continentError.textContent = ''
    }
}

function validateZip() {
    const zipError = document.querySelector('#zip-error')
    if(isNaN(zipInput.value)) {
        zipError.textContent = 'This should be a number'
    } else if (zipInput.validity.tooShort) {
        zipError.textContent = 'This zip code is too short'
    } else {
        zipError.textContent = ''
    }
}

function validatePassword() {
    const passwordError = document.querySelector('#password-error')
    if(passwordInput.validity.patternMismatch) {
        passwordError.textContent = 'Write at least 1 uppercase and 1 lowercase'
    } else {
        passwordError.textContent = ''
    }
}

function validateConfirmation() {
    const confirmationError = document.querySelector('#confirmation-error')
    if(confirmationInput.value !== passwordInput.value) {
        confirmationError.textContent = 'It doesn\'t match with the password'
    } else {
        confirmationError.textContent = ''
    }
}

function clearForm() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach((i) => i.value = '')
}

emailInput.addEventListener('input', validateMail)

continentInput.addEventListener('input', validateContinent)

zipInput.addEventListener('input', validateZip)

passwordInput.addEventListener('input', validatePassword)

confirmationInput.addEventListener('input', validateConfirmation)


document.querySelector('#submit-form').addEventListener('click', clearForm)