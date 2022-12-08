let search = document.querySelector('.search')
let city = document.querySelector('.city')
let country = document.querySelector('.country')
let value = document.querySelector('.value')
let shortDesc = document.querySelector('.short-desc')
let visibility = document.querySelector('.visibility span')
let wind = document.querySelector('.wind span')
let sun = document.querySelector('.sun span')
let time = document.querySelector('.time')
let weather = document.getElementById('weather')

let changeWeatherUI = async (searchCountry) => {

    apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCountry}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`

    let data = await fetch(apiURL).then(res => res.json())


    city.innerText = data.name
    country.innerText = data.sys.country
    visibility.innerText = data.visibility + ' (m)'
    wind.innerText = data.wind.speed + ' (m/s)'
    sun.innerText = data.main.humidity + ' (%)'
    value.innerText = data.main.temp

    if (data.main.temp > 25) {
        weather.classList.add('hot')
    } else {
        weather.classList.add('cold')
    }

    time.innerText = new Date().toLocaleString()

}

changeWeatherUI('Ha Noi')
search.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
        changeWeatherUI(search.value.trim())
    }
})