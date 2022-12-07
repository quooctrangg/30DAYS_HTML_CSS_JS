let btnOpen = document.getElementsByClassName('open_modal_btn')[0];
let modal = document.getElementsByClassName('hide')[0];
let btn_close = document.getElementsByClassName('btn_close')[0];
let icon_close = document.getElementsByClassName('icon_close')[0];
let body = document.getElementsByTagName('body')[0]

body.addEventListener('click', (e) => {
    if (e.target === body) {
        modal.style.display = 'none'
    }
})

btnOpen.addEventListener('click', () => {
    modal.style.display = 'inline'
})

btn_close.addEventListener('click', () => {
    modal.style.display = 'none'
})

icon_close.addEventListener('click', () => {
    modal.style.display = 'none'
})