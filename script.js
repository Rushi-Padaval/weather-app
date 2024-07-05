const apiKey = "d6270b1dab7081cdb90310a0d2194692";
const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=kolhapur&appid=d6270b1dab7081cdb90310a0d2194692&units=metric`;



const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) 
{
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp"+"°c").innerHTML =math.random(data.main.temp);
    document.querySelector(".humidity").innerHTML =data.main.humidity+"%";

    document.querySelector(".wind").innerHTML= data.wind.speed+ "km/h";
    
   
}
checkWeather(click) 

searchBtn = addEventListener("click" ,()=>{
checkWeather(searchBox.value) 




})


//  this code  for upgrade purpose 

//source AI

// function checkWeather () {
//     const city = document.getElementById('cityInput').value;
//     const apiKey = 'd6270b1dab7081cdb90310a0d2194692';
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=mumbai
//     &appid=d6270b1dab7081cdb90310a0d2194692&units=metric`; // Use metric units to get temperature in Celsius

//     fetch(apiUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json();
//         })
//         .then(data => {
//             const temperature = data.main.temp;
//             const weatherDescription = data.weather[0].description;
//             const rain = data.rain && data.rain['1h'] ? data.rain['1h'] : 0;

//             document.getElementById('temperature').textContent = `Current temperature: ${temperature} °C`;
//             document.getElementById('description').textContent = `Weather description: ${weatherDescription}`;
//             document.getElementById('rain').textContent = `Rain in the last hour: ${rain} mm`;
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//             document.getElementById('temperature').textContent = 'Error fetching weather data';
//             document.getElementById('description').textContent = '';
//             document.getElementById('rain').textContent = '';
//         });
// }



