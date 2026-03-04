# Weather App 🌤️

A simple weather app that shows current weather and a 3-day forecast for any city.

## Features

- Search weather by city name
- Auto-detects your current location on load
- Current location button to refresh to your location anytime
- Shows temperature, condition, wind speed and humidity
- 3-day forecast with condition and humidity
- Sunrise and sunset times
- Remembers your last searched city using local storage

## Tech Stack

- HTML,JavaScript
- Tailwind CSS
- Font Awesome icons
- [WeatherAPI](https://www.weatherapi.com/)

## Setup

1. Clone the repo
2. Get a free API key from [weatherapi.com](https://www.weatherapi.com/)
3. Replace the `apiKey` value in `script.js` with your key
4. Open `index.html` in your browser

## API

This project uses the WeatherAPI forecast endpoint:
```
https://api.weatherapi.com/v1/forecast.json?key=YOUR_KEY&q=CITY&days=3
```