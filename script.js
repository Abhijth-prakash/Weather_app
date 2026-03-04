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


//search funtion
btn.onclick = async function() {

  const city = cityInput.value.trim()

  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + city
  );

  const data = await response.json();
  console.log(data);
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

const date = data.location.localtime.split(" ")[0]; 
const day = new Date(date).toLocaleDateString("en-US", {
  weekday: "long"
});

today.firstChild.textContent = day
todaycondtion.textContent = data.current.condition.text;
  
};
