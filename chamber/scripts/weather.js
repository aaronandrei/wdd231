const myCity = document.querySelector('#city');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myWeatherIcon = document.querySelector('#weathericon');
const myTempHigh = document.querySelector('#temphigh');
const myTempLow = document.querySelector('#templow');
const myHumidity = document.querySelector('#humidity');
const mySunrise = document.querySelector('#sunrise');
const mySunset = document.querySelector('#sunset');


const myKey = process.env.API_KEY;
const myLat = "29.762990289886258"
const myLong = "-95.38846844810067"

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function convertTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
}

function displayResults(data) {
    console.log('hello')
    myCity.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${Math.round(data.main.temp)}&deg;F`;

    const iconsrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myWeatherIcon.setAttribute('src', iconsrc);
    myWeatherIcon.setAttribute('alt', data.weather[0].description);

    myTempHigh.innerHTML = `High: ${Math.round(data.main.temp_max)}&deg;F`;
    myTempLow.innerHTML = `Low: ${Math.round(data.main.temp_min)}&deg;F`;
    myHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    mySunrise.innerHTML = `Sunrise: ${convertTimestamp(data.sys.sunrise)}`;
    mySunset.innerHTML = `Sunset: ${convertTimestamp(data.sys.sunset)}`;
}

apiFetch();