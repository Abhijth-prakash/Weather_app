const btn = document.getElementById("btn");
const cityInput = document.getElementById("city");
const result = document.getElementById("result");
const place = document.getElementById("place")
const temp = document.getElementById("temp")
const condition = document.getElementById("condition")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")
const img = document.getElementById("img")
const apiKey = "4b4f884d109c4d7789060824260303"; 
const today = document.getElementById("today")
const todaycondtion = document.getElementById("todaycondtion")
const todayhumidiy = document.getElementById("todayhumidiy")
const day2 = document.getElementById("day2")
const day2condtion = document.getElementById("day2condtion")
const day2humidity = document.getElementById("day2humidity")
const day3 = document.getElementById("day3")
const day3condition = document.getElementById("day3condition")
const day3humidity = document.getElementById("day3humidity")
const sunrise = document.getElementById("sunrise")
const sunset = document.getElementById("sunset")
const locationBtn = document.getElementById("locationBtn")


//search funtion
btn.onclick = async function() {

  const city = cityInput.value.trim()
  

const response = await fetch(
  "https://api.weatherapi.com/v1/forecast.json?key=" + apiKey + "&q=" + city + "&days=3"
);

  const data = await response.json();

  //saving city name in local storage
  localStorage.setItem("lastCity", data.location.name);


  place.textContent = data.location.name
  temp.innerHTML = data.current.temp_c + '<span class="text-3xl align-super">°C</span>';
  condition.textContent = data.current.condition.text;
  humidity.innerHTML = `${data.current.humidity}<span class="text-sm ">%</span>`;
  wind.innerHTML = `${data.current.wind_kph} <span class="text-sm ">km/h</span>`;
  
const code = data.current.condition.code;

if (code === 1003 || code === 1006 || code === 1009) {
    img.src = "./images/cloudy.png"
} 
else if (
    code === 1180 || 
    code === 1183 || 
    code === 1186 || 
    code === 1189 || 
    code === 1192 || 
    code === 1195
) {
    img.src = "./images/rainy.png"
} 
else if (
    code === 1273 || 
    code === 1276 || 
    code === 1279 || 
    code === 1282
) {
    img.src = "./images/thunder.png"
} 
else {
    img.src = "./images/sunny.png"
}

//today's
const date = data.location.localtime.split(" ")[0]; 
const day = new Date(date).toLocaleDateString("en-US", {
  weekday: "long"
});

today.firstChild.textContent = day
todaycondtion.textContent = data.current.condition.text;
todayhumidiy.innerHTML = `${data.current.humidity}<span class="text-sm ">%</span>`;


//tommorows 
const tomorrow = data.forecast.forecastday[1];
const nextday = new Date(tomorrow.date).toLocaleDateString("en-US", {
  weekday: "long"
});

day2.firstChild.textContent =nextday;
day2condtion.textContent = tomorrow.day.condition.text;
day2humidity.innerHTML = `${tomorrow.day.avghumidity}<span class="text-sm ">%</span>`;


//day after tommorow
const dayaftm = data.forecast.forecastday[2];
const thirdday = new Date(dayaftm.date).toLocaleDateString("en-US", {
  weekday: "long"
});
day3.firstChild.textContent = thirdday;
day3condition.textContent = dayaftm.day.condition.text;
day3humidity.innerHTML = `${dayaftm.day.avghumidity}<span class="text-sm ">%</span>`;

//sunrise sunset
sunrise.textContent = data.forecast.forecastday[0].astro.sunrise
sunset.textContent =  data.forecast.forecastday[0].astro.sunset
  
};


//searches for the location function
function getLocation() {
  navigator.geolocation.getCurrentPosition(async function(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    cityInput.value = lat + "," + lon;
    btn.click();
    cityInput.value = "";
  });
}

//automatically searches users location info by browser methods on page load
window.onload = function() {
  const savedCity = localStorage.getItem("lastCity");
  if (savedCity) {
    cityInput.value = savedCity;
    btn.click();
    cityInput.value = "";
  } else {
    getLocation();
  }
};

//current location search
locationBtn.addEventListener('click', getLocation);

