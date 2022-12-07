let alertt = document.getElementsByClassName('alert')[0]
let box = document.getElementsByClassName('box')[0]
let card = document.getElementsByClassName('card')
let result = document.getElementsByClassName('result')[0]

document.addEventListener('keydown', (e) => {

    let keyName = e.keyCode === 32 ? 'Space' : e.key

    result.innerText = keyName

    card[0].children[1].innerText = keyName
    card[1].children[1].innerText = e.location
    card[2].children[1].innerText = e.which
    card[3].children[1].innerText = e.code

    alertt.classList.add('hide');
    box.classList.remove('hide');
})