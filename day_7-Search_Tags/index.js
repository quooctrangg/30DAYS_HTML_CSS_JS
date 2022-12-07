let input = document.querySelectorAll('.form input')[0]
let btn = document.getElementsByTagName('button')[0]
let show = document.getElementsByTagName('ul')[0]


let todos = []

const addTodos = () => {
    let newTodos = {
        text: input.value,
        completed: false
    }
    todos.push(newTodos)
    localStorage.setItem('listTodos', JSON.stringify(todos))
    window.location.reload()
}

btn.addEventListener('click', () => {
    if (input.value != '') {
        addTodos()
        input.value = ''
    }
})

const checkKeyEnter = (e) => {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code === 13) {
        if (input.value != '') {
            addTodos()
            input.value = ''
        }
    }
}

const showTodos = () => {
    todos = JSON.parse(localStorage.getItem('listTodos'))
    if (todos !== '') {
        todos.forEach((item, index) => {
            show.innerHTML += `<li><span>${item.text}</span> <i class="fa-solid fa-trash trash"></i></li>`
            if (item.completed == true) {
                let span = document.querySelectorAll('span')
                span[index].classList.add("completed")
            }
        })
    }
    let trash = document.querySelectorAll('.trash')
    trash.forEach((item, index) => {
        todos = JSON.parse(localStorage.getItem('listTodos'))
        item.addEventListener('click', () => {
            todos.splice(index, 1)
            localStorage.setItem('listTodos', JSON.stringify(todos))
            window.location.reload()
        })
    })

    let span = document.querySelectorAll('span')
    span.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (todos[index].completed === false) {
                todos[index].completed = true
            } else {
                todos[index].completed = false
            }
            localStorage.setItem('listTodos', JSON.stringify(todos))
            window.location.reload()
        })
    })
}


