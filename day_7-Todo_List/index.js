let input = document.querySelectorAll('.form input')[0]
let form = document.querySelector('form')
let ul = document.querySelector('.todos')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let val = input.value.trim()
    if (val) {
        addTodosElement({
            text: val,
            completed: false,
        })
        updateTodos()
    }
    input.value = ''
})

const addTodosElement = (todo) => {
    let li = document.createElement('li');
    li.innerHTML = `<span>${todo.text}</span> <i class="fa-solid fa-trash trash"></i>`

    if (todo.completed === true) {
        li.querySelector('span').setAttribute('class', 'completed')
    }

    li.querySelector('span').addEventListener('click', function () {
        this.classList.toggle('completed')
        console.log(this.classList.contains('completed'));
        updateTodos()
    })

    li.querySelector('i').addEventListener('click', function (e) {
        e.target.parentElement.remove()
        updateTodos()
    })

    ul.appendChild(li)
}

const updateTodos = () => {
    const list = document.querySelectorAll('li')

    const todos = []

    list.forEach((item) => {

        console.log();
        todos.push({
            text: item.querySelector('span').innerHTML,
            completed: item.children[0].classList.contains('completed'),
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}

const initTodos = () => {
    let data = JSON.parse(localStorage.getItem('todos'))
    data.forEach(item => {
        addTodosElement(item)
    })
}

initTodos()