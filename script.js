const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityName) {
  const apiKey = "4d9fc3e4d18740bb80e92811242001"; 
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}
button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  cityName.innerText = `${result.location.name},${result.location.region},${result.location.country}`;
  cityTime.innerText = result.location.localtime;
  cityTemp.innerText = result.current.temp_c;
});

/* const promise = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=4d9fc3e4d18740bb80e92811242001&q=london&aqi=yes"
  );
  return await promise.json();
}*/

/*const API_KEY = "334eee7566740288f9b57b379659cf20";

async function fetchWeather() {
  try {
    const city = "New York"; // Change this to the desired city
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const weatherData = await response.json();
    displayWeather(weatherData);
  } catch (error) {
    console.error("There was a problem fetching the weather data:", error);
  }
}

function displayWeather(weatherData) {
  const weatherContent = document.getElementById("weatherContent");
  const description = weatherData.weather[0].description;
  const temperature = weatherData.main.temp;
  const humidity = weatherData.main.humidity;

  const weatherInfo = `Description: ${description}<br>Temperature: ${temperature}°C<br>Humidity: ${humidity}%`;

  weatherContent.innerHTML = weatherInfo;
}*/
