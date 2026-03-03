
const btn = document.getElementById("btn");
const cityInput = document.getElementById("city");
const result = document.getElementById("result");
const place = document.getElementById("place")
const temp = document.getElementById("temp")
const condition = document.getElementById("condition")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")


const apiKey = "4b4f884d109c4d7789060824260303"; 

btn.onclick = async function() {

  const city = cityInput.value.trim()

  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + city
  );

  const data = await response.json();

  console.log(data)

  place.textContent = data.location.name
  temp.innerHTML = data.current.temp_c + '<span class="text-3xl align-super">°C</span>';
  condition.textContent = data.current.condition.text;
  humidity.innerHTML = `${data.current.humidity}<span class="text-sm ">%</span>`;
  wind.innerHTML = `${data.current.wind_kph} <span class="text-sm ">km/h</span>`;

};
