let content = document.querySelector('.content')
let input = document.querySelector('.content input')
let removeAll = document.querySelector('.remove-all')


let tags = ['NodeJs', 'ReactJs']

let reRender = () => {
    content.innerHTML = ''
    tags.forEach((item, index) => {
        content.innerHTML += `<li>${item}<i class="fa-solid fa-xmark" onclick="remove(${index})"></i></li>`
    })

    content.appendChild(input)
    input.focus()
}

reRender()

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        value = input.value.trim()
        if (value !== '') {
            let check = true
            tags.forEach(item => {
                if (item === value) {
                    check = false
                }
            })
            if (check) {
                tags.push(input.value.trim())
                reRender()

            }
        }
        input.value = ''
    }
})

let remove = index => {
    tags.splice(index, 1)
    reRender()
}

removeAll.addEventListener('click', () => {
    tags = [];
    reRender()
})