let btn = document.getElementsByClassName('search__box-btn')[0]
let search_box = document.getElementsByClassName('search__box')[0];


btn.addEventListener('click', () => {
    search_box.classList.toggle('open')
})