import { useState } from "react";
import "./App.css";

const weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Cloudy",
  45: "Foggy",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Heavy drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Light showers",
  81: "Showers",
  82: "Heavy showers",
  95: "Thunderstorm",
};

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchWeather = async (event) => {
    event.preventDefault();

    const searchCity = city.trim();

    if (!searchCity) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    try {
      setIsLoading(true);
      setError("");
      setWeather(null);

      const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          searchCity
        )}&count=1&language=en&format=json`
      );

      if (!locationResponse.ok) {
        throw new Error("Could not search for that city.");
      }

      const locationData = await locationResponse.json();
      const location = locationData.results?.[0];

      if (!location) {
        throw new Error("City not found. Try another city name.");
      }

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,weather_code&timezone=auto`
      );

      if (!weatherResponse.ok) {
        throw new Error("Weather details are unavailable right now.");
      }

      const weatherData = await weatherResponse.json();
      const current = weatherData.current;

      setWeather({
        name: location.name,
        country: location.country,
        temperature: Math.round(current.temperature_2m),
        humidity: current.relative_humidity_2m,
        condition: weatherCodes[current.weather_code] || "Weather update",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="weather-page">
      <section className="weather-panel">
        <div className="weather-copy">
          <p className="eyebrow">Live weather</p>
          <h1>Weather App</h1>
          <p className="intro">
            Search a city to see the current temperature, humidity, and sky
            condition.
          </p>
        </div>

        <form className="search-form" onSubmit={searchWeather}>
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Enter city name"
            aria-label="City name"
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Searching..." : "Search"}
          </button>
        </form>

        {error && <p className="message error">{error}</p>}

        {weather && (
          <article className="weather-card">
            <div>
              <p className="location">
                {weather.name}, {weather.country}
              </p>
              <p className="condition">{weather.condition}</p>
            </div>

            <p className="temperature">{weather.temperature}°C</p>

            <div className="weather-details">
              <div>
                <span>Humidity</span>
                <strong>{weather.humidity}%</strong>
              </div>
              <div>
                <span>Condition</span>
                <strong>{weather.condition}</strong>
              </div>
            </div>
          </article>
        )}
      </section>
    </main>
  );
}

export default App;
