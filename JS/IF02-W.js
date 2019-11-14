const API_KEY = "1af5922fab1bb3d30821d6bb74d6bf4e";
const searchButton = document.querySelector("#basic-text1");
const searchInput = document.querySelector("#search-txt");
const cityName = document.querySelector("#cityname");
const icon = document.querySelector("#icon");
const tempa = document.querySelector("#temp");
const hud = document.querySelector("#hud");
const cn = document.querySelector("#country");
const time = document.querySelector("#timezone");
const desc = document.querySelector("#description");
const wind = document.querySelector("#wind");

searchButton.addEventListener("click",findWeatherDetails);
searchInput.addEventListener("keyup",enterPressed);

function enterPressed(event)
{
    if(event.key === "Enter")
    {
        findWeatherDetails();
    }
}

function findWeatherDetails()
{
    if(searchInput.value === "")
    {

    }
    else
    {
        const searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid=" + API_KEY;
        httpRequestAsync(searchLink,theRsponse);
    }
}

function theRsponse(response)
{
    const jsonObject = JSON.parse(response);
    cityName.innerHTML = jsonObject.name;;
    icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    tempa.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
    hud.innerHTML = jsonObject.main.humidity + "%";
    cn.innerHTML = jsonObject.sys.country;
    time.innerHTML = jsonObject.timezone;
    desc.innerHTML = jsonObject.weather.description;
    wind.innerHTML = jsonObject.wind.speed;
}

function httpRequestAsync(url,callback){
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () =>
    {
        if(httpRequest.readyState == 4 && httpRequest.status == 200)
        {
            callback(httpRequest.responseText);
        }
    } 
    httpRequest.open("GET",url,true);
    httpRequest.send();
}