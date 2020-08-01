const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.openweathermap.org/data/2.5/onecall?lat="+ latitude +"&lon="+ longitude +"&%20exclude=hourly,daily&units=metric&appid=aa4330f304d20328c7eb327601d8e0d8&"
    request({ url, json: true}, (error, response) => {
        if (error) {
          callback("Unable to connect to weather service!", undefined)
        } else if (response.body.message) {
          callback("Unable to find location!", undefined)
        } else {
          callback(undefined, "It is currently " + response.body.current.temp + " degrees out. " + "Across the sky will be " + response.body.current.weather[0].description)
        }

    })
}

module.exports = forecast
