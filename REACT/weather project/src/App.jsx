import { useState } from 'react'
import './App.css'

const WEATHER_CODES = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Rime fog',
  51: 'Light drizzle',
  53: 'Drizzle',
  55: 'Heavy drizzle',
  56: 'Freezing drizzle',
  57: 'Freezing drizzle',
  61: 'Light rain',
  63: 'Rain',
  65: 'Heavy rain',
  66: 'Freezing rain',
  67: 'Freezing rain',
  71: 'Light snow',
  73: 'Snow',
  75: 'Heavy snow',
  77: 'Snow grains',
  80: 'Light showers',
  81: 'Showers',
  82: 'Heavy showers',
  85: 'Snow showers',
  86: 'Heavy snow showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with hail',
  99: 'Thunderstorm with hail',
}

const getCondition = (code) => WEATHER_CODES[code] ?? 'Weather unavailable'

const QUICK_CITIES = ['Chennai', 'Bengaluru', 'Mumbai', 'Delhi', 'London', 'Tokyo']

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const fetchWeather = async (searchCity) => {
    const cityName = searchCity.trim()

    if (!cityName) {
      setError('Enter a city name to check the weather.')
      setWeather(null)
      setStatus('error')
      return
    }

    setStatus('loading')
    setError('')
    setWeather(null)

    try {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          cityName,
        )}&count=1&language=en&format=json`,
      )

      if (!geoResponse.ok) {
        throw new Error('Unable to search for that city right now.')
      }

      const geoData = await geoResponse.json()
      const location = geoData.results?.[0]

      if (!location) {
        setStatus('error')
        setError('No matching city found. Try a nearby larger city.')
        return
      }

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m&temperature_unit=celsius&wind_speed_unit=kmh`,
      )

      if (!weatherResponse.ok) {
        throw new Error('Weather details are unavailable right now.')
      }

      const weatherData = await weatherResponse.json()

      setWeather({
        city: location.name,
        country: location.country,
        temperature: Math.round(weatherData.current.temperature_2m),
        feelsLike: Math.round(weatherData.current.apparent_temperature),
        humidity: weatherData.current.relative_humidity_2m,
        condition: getCondition(weatherData.current.weather_code),
        windSpeed: Math.round(weatherData.current.wind_speed_10m),
        windDirection: weatherData.current.wind_direction_10m,
        updatedAt: new Date(weatherData.current.time).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      })
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Something went wrong. Please try again.')
    }
  }

  const searchWeather = (event) => {
    event.preventDefault()
    fetchWeather(city)
  }

  const searchQuickCity = (quickCity) => {
    setCity(quickCity)
    fetchWeather(quickCity)
  }

  return (
    <main className="weather-app">
      <section className="weather-shell" aria-label="Weather search">
        <div className="weather-copy">
          <p className="eyebrow">Live city forecast</p>
          <h1>Weather App</h1>
          <p>
            Current city conditions with live readings for temperature,
            humidity, and sky condition.
          </p>
        </div>

        <form className="search-panel" onSubmit={searchWeather}>
          <label htmlFor="city">City</label>
          <div className="search-row">
            <input
              id="city"
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              placeholder="Chennai"
              autoComplete="address-level2"
            />
            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        {error && (
          <p className="message error" role="alert">
            {error}
          </p>
        )}

        <section className="result-panel" aria-live="polite">
          {weather ? (
            <>
              <div className="location">
                <span className="weather-mark" aria-hidden="true"></span>
                <div>
                  <h2>{weather.city}</h2>
                  <p>{weather.country}</p>
                </div>
              </div>

              <div className="temperature">
                <span>{weather.temperature}</span>
                <sup>°C</sup>
              </div>

              <div className="weather-grid">
                <div>
                  <span>Humidity</span>
                  <strong>{weather.humidity}%</strong>
                </div>
                <div>
                  <span>Condition</span>
                  <strong>{weather.condition}</strong>
                </div>
              </div>
            </>
          ) : (
            <div className="empty-state">
              <span className="weather-mark" aria-hidden="true"></span>
              <h2>Ready for a city</h2>
              <p>Your weather result will appear here.</p>
            </div>
          )}
        </section>
      </section>

      <section className="app-section quick-section" aria-label="Quick cities">
        <div>
          <p className="eyebrow">Quick cities</p>
          <h2>Popular searches</h2>
        </div>
        <div className="city-list">
          {QUICK_CITIES.map((quickCity) => (
            <button
              type="button"
              key={quickCity}
              onClick={() => searchQuickCity(quickCity)}
              disabled={status === 'loading'}
            >
              {quickCity}
            </button>
          ))}
        </div>
      </section>

      <section className="detail-layout" aria-label="Weather details">
        <div className="app-section">
          <p className="eyebrow">Details</p>
          <h2>Current readings</h2>
          <div className="detail-grid">
            <article>
              <span>Feels like</span>
              <strong>{weather ? `${weather.feelsLike} deg C` : '--'}</strong>
            </article>
            <article>
              <span>Wind speed</span>
              <strong>{weather ? `${weather.windSpeed} km/h` : '--'}</strong>
            </article>
            <article>
              <span>Wind direction</span>
              <strong>{weather ? `${weather.windDirection} deg` : '--'}</strong>
            </article>
            <article>
              <span>Updated</span>
              <strong>{weather ? weather.updatedAt : '--'}</strong>
            </article>
          </div>
        </div>

        <div className="app-section condition-section">
          <p className="eyebrow">Condition</p>
          <h2>{weather ? weather.condition : 'Awaiting weather'}</h2>
          <p>
            {weather
              ? `${weather.city} is reporting ${weather.condition.toLowerCase()} with ${weather.humidity}% humidity.`
              : 'No live condition selected yet.'}
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
