let searchBox = document.querySelector(".search-box");
let logo = document.querySelector(".logo");
let temperature = document.querySelector(".temprature");
let windspeed = document.querySelector(".windspeed");
let humidity = document.querySelector(".humidity");
let image = document.querySelector(".image");
let name = document.querySelector(".city-name");
const apiKey = "52ada617d20b8c5d8df16bafac65fd0e";

async function fetchData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    temperature.innerText = `Temperature: ${data.main.temp}°C`;
    windspeed.innerText = `Windspeed: ${data.wind.speed}Km/h`;
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
    name.innerText = city;
    const weatherImage = document.getElementById("weather-image");
    const weatherMain = data.weather[0].main.toLowerCase();
    if (weatherMain == "clouds") {
        weatherImage.src = "cloudy.png";
    } else if (weatherMain == "clear") {
        weatherImage.src = "sunny.png";
    } else {
        weatherImage.src = "windy.png";
    }
    image.style.visibility = 'visible';
    temperature.style.visibility = "visible";
    windspeed.style.visibility = "visible";
    humidity.style.visibility = "visible";
}


logo.addEventListener("click", () => {
    let value = searchBox.value;
    fetchData(value);
});
