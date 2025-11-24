const API_KEY = "e40c4345f2e60d59e89502f10ef62d4f";

async function searchWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        showError("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            showError("City not found!");
            return;
        }

        const data = await response.json();
        displayWeather(data);

    } catch (error) {
        showError("Network error. Try again.");
    }
}

function displayWeather(data) {
    const card = document.getElementById("weatherCard");
    const error = document.getElementById("errorMsg");

    error.textContent = "";

    card.innerHTML = `
        <h2>${data.name}</h2>
        <h1>${data.main.temp}°C</h1>
        <p>${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} km/h</p>
    `;

    card.style.display = "block";
}

function showError(msg) {
    const card = document.getElementById("weatherCard");
    const error = document.getElementById("errorMsg");

    card.style.display = "none";
    error.textContent = msg;
}

// Enable Enter Key Search
document.getElementById("cityInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        searchWeather();
    }
});
