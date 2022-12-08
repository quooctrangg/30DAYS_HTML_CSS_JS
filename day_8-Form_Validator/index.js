let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')

let form = document.querySelector('form')

const showError = (input, message) => {
    let formControl = input.parentElement
    formControl.classList = 'form__control error'
    let small = formControl.querySelector('small')
    small.innerText = message
}

const showSuccess = input => {
    let formControl = input.parentElement
    formControl.classList = 'form__control success'
    let small = formControl.querySelector('small')
    small.innerText = ""
}

let getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

const checkLength = (input, max, min) => {
    let value = input.value.trim()
    if (value.length > max) {
        showError(input, `${getFieldName(input)}  must be less than ${max} characters`)
        return false
    }
    if (value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
        return false
    }
    showSuccess(input)
    return true
}

const checkRequired = listArr => {
    let isCheck = true
    listArr.forEach(element => {
        if (element.value.trim() === '') {
            isCheck = false
            showError(element, `${getFieldName(element)} is required`)
        } else {
            showSuccess(element);
        }
    })
    return isCheck
}

const checkPassword = (password, password2) => {
    if (password.value.trim() !== password2.value.trim()) {
        showError(password2, 'Passwords do not match')
        return false
    }
    showSuccess(password2)
    return true
}

const checkEmail = input => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let value = input.value.trim();
    if (!regex.test(value)) {
        showError(input, 'Email is not valid')
        return false
    }
    showSuccess(input)
    return true
}

form.addEventListener('submit', e => {
    e.preventDefault()

    if (checkRequired([username, email, password, password2])) {
        if (checkLength(username, 15, 5) && checkEmail(email) && checkLength(password, 30, 6) && checkPassword(password, password2)) {
            alert('Dang ky thanh cong')
        }
    }
})