let picture = document.getElementById('picture')
let preview = document.querySelector('.preview')
let error = document.querySelector('.error')

picture.addEventListener('change', e => {

    urlImg = picture.files[0]

    if (!urlImg) {
        return
    }
    // if (!urlImg.name.endsWith('.jpg')) {
    //     console.log('')
    //     return
    // }
    if (urlImg.size / (1024 * 1024) > 5) {
        error.innerText = 'Tối đa 5MB'
        return
    }
    else {
        error.innerText = ''
    }

    let img = document.createElement('img')

    let fileReader = new FileReader()
    fileReader.readAsDataURL(urlImg)
    fileReader.onloadend = e => {
        img.src = e.target.result
    }

    // img.src = URL.createObjectURL(urlImg)
    preview.appendChild(img)
})