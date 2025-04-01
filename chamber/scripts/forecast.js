const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');
const twoDays = document.querySelector('#twodays');

// const myKey = process.env.API_KEY;
const forecastKey = "6b749431de4ec269e220cfa032263d9e"
const forecastLat = "29.762990289886258"
const forecastLong = "-95.38846844810067"

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${forecastLat}&lon=${forecastLong}&appid=${forecastKey}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayForecastResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function getDayOfWeek(offset) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    today.setDate(today.getDate() + offset);
    return days[today.getDay()];
}

function displayForecastResults(data) {
    // console.log('hello');
    today.innerHTML = `Today: ${Math.round(data.list[0].main.temp)}&deg;F`;
    tomorrow.innerHTML = `${getDayOfWeek(1)}: ${Math.round(data.list[8].main.temp)}&deg;F`;
    twoDays.innerHTML = `${getDayOfWeek(2)}: ${Math.round(data.list[16].main.temp)}&deg;F`;
}

apiFetch();