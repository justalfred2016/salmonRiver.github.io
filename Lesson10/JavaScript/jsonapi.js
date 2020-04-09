const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=47c4e1b3676af835b875196a9383c9fd'
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.log(jsonObject);
        let weather = jsonObject.weather[0].description;
        document.getElementById('weather').textContent = weather  
        let temp = Math.round(jsonObject.main.temp_max);
        document.getElementById('temp').textContent = temp;   
        let humidity = jsonObject.main.humidity;
        document.getElementById('humidity').textContent = humidity;
        let windSpeed = Math.round(jsonObject.wind.speed);
        document.getElementById('windSpeed').textContent = windSpeed;  
        let speedFactor = Math.pow(windSpeed, 0.16);
        let windChill = Math.round(35.74 + (0.6215 * temp) - (35.75 * speedFactor) + (0.4275 * temp * speedFactor));
    
        if (temp <= 50 && windSpeed >= 3) {
          document.getElementById("chill").innerHTML = windChill;
        } else {
          document.getElementById("chill").innerHTML = "N/A";
        }
    })

    const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=47c4e1b3676af835b875196a9383c9fd'
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsObject) {
        console.log(jsObject);

    })

                
              
         