let process = document.querySelector('.process')
let value = document.querySelector('.process span')
let range = document.querySelector('.range')

const updateProcess = (percent) => {
    process.style.width = `${percent}%`
    value.innerText = `${percent}%`
}

range.addEventListener('mousemove', function(e) {
    let processWidth = e.pageX - this.offsetLeft
    let percent = (processWidth / this.offsetWidth) * 100
    percent = Math.round(percent)
    updateProcess(percent)
})

updateProcess(55)