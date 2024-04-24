const temp = document.querySelector('.temp');
const city = document.querySelector('.city');
const weather = document.querySelector('.weather');

const key = '6557810176c36fac5f0db536711a6c52';
const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');





async function getWeather(query){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    
    setWeather(data);
}
  function setWeather(data){
    temp.textContent = `${data.main.temp} F`;
    city.textContent = `${data["weather"][0]["description"]}`;
    weather.textContent = `${data.main.humidity}`;
}

searchBtn.addEventListener('click', () => {
    getWeather(searchBar.value);
});

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
});

