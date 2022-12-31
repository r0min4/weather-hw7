let celsius = null ;
let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let currentDate = document.querySelector("#date");
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = days[date.getDay()];
currentDate.innerHTML = `Last Update: ${day} ${hour}:${minutes}`

function showResult(response){
    console.log(response.data);
    let img = document.querySelector("#imgicon");
    img.setAttribute("src", `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`)
    let temperature = document.querySelector("#temperature");
    let temp = response.data.main.temp;
    temperature.innerHTML = Math.round(temp) ;
    celsius = Math.round(temp) ;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `Humidity: ${response.data.main.humidity} %`;
    let wind = document.querySelector("#wind");
    wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
    let describe = document.querySelector("#describe");
    describe.innerHTML = response.data.weather[0].main ;
    let cityName = document.querySelector("#city");
    cityName.innerHTML = response.data.name ;

}

function search(city){
    let apiKey = "743bee57fddbfaf52447193a87d5dd25";
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(api).then(showResult);
}
search("New York");

function searchButton(event){
    event.preventDefault();
    pointerCent.classList.add("temp");
    pointerFaren.classList.remove("temp");
    let city = document.querySelector("#search");
    city = city.value;
    search(city);
}


let searchBtn = document.querySelector("#button");
searchBtn.addEventListener("click" , searchButton);

function showCentigrad(event){
    event.preventDefault();
    let cent = document.querySelector("#temperature");
    cent.innerHTML = celsius;
    pointerFaren.classList.remove("temp");
    pointerCent.classList.add("temp");
}

let degreeC = document.querySelector("#centigrad");
degreeC.addEventListener("click" , showCentigrad);

function showFaren(event){
    event.preventDefault();
    let f = Math.round((celsius * 9) / 5 + 32 ) ;
    let faren = document.querySelector("#temperature");
    faren.innerHTML = f;
    pointerFaren.classList.add("temp");
    pointerCent.classList.remove("temp");
   
}

let degreeF = document.querySelector("#faren");
degreeF.addEventListener("click" , showFaren);

let pointerFaren = document.querySelector("#faren");
let pointerCent = document.querySelector("#centigrad");


