
const city = document.getElementById("city");


const apikey = `${api_key}`;
const temperature = document.getElementById("temp");
const humidity = document.getElementById("humidity"); 
const pressure = document.getElementById("pressure");

async function fetchweather() {
    const cityname = city.value.toLowerCase();
    if (!cityname) {
        alert("Enter a city name");
        return; 
    }
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`);
        const responsejson = await response.json();
        
        console.log(responsejson);
        console.log(responsejson.main);
        
        temperature.textContent = `Temperature : ${(responsejson.main.temp - 273.15).toFixed(2)} °C`;
        humidity.textContent = `Humidity : ${responsejson.main.humidity.toFixed(2)} %`;
        
        let description = document.createElement('p');
        description.id = 'description';
        let weatherDescription = responsejson.weather[0].description;
        description.textContent = ` ${weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}`;
        
        
        let outputDiv = document.getElementById('output');
        
        let existingDescription = document.getElementById('description');
        if (existingDescription) {
            outputDiv.removeChild(existingDescription);
        }
        
        outputDiv.appendChild(description);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      fetchweather();
  }
});
