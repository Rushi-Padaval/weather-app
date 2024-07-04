const apiKey = "d6270b1dab7081cdb90310a0d2194692";
const apiUrl= `https://api.openweathermap.org/data/2.5/weather?&units=metrics&q=mumbai`;

async function checkWeather() 
{
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
    
}
checkWeather() 

let data = document.querySelector(data)