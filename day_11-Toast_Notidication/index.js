const toasts = {
    success: {
        icon: ' <i class="fa-regular fa-circle-check"></i>',
        msg: 'This is a success message !',
    },
    error: {
        icon: '<i class="fa-solid fa-triangle-exclamation"></i>',
        msg: 'This is a error message !',
    },
    warning: {
        icon: '<i class="fa-solid fa-circle-exclamation"></i>',
        msg: 'This is a warning message !',
    },
}

const createToast = (status) => {
    let toast = document.createElement('div')
    toast.classList = `toast ${status}`

    toast.innerHTML = `${toasts[status].icon}<span class="msg">${toasts[status].msg}</span><span class="countdown"></span>`

    document.querySelector('.toasts').appendChild(toast)

    setTimeout(() => {
        toast.style.animation = 'hide_slide 1s ease forwards'
    }, 4000)
    setTimeout(() => {
        toast.remove()
    }, 5000)
}

const buttonShows = document.querySelectorAll('.container button')
buttonShows.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        createToast(e.target.getAttribute('class'))
    })
})
