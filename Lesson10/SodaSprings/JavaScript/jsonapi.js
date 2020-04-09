const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=47c4e1b3676af835b875196a9383c9fd'
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
const forecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=47c4e1b3676af835b875196a9383c9fd';

    fetch(forecast)
    .then(function(response){
        return response.json()
    })
        .then(function (jsObject){
            console.log(jsObject)
            let date = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

    for (let i = 0; i < fivedayforecast.length; i++) {
        let data = document.getElementById(`data${i+1}`).innerHTML = weekday[(date.getDay() + i + 1 ) % 7];
     let label= document.getElementById(`label${i+1}`).innerHTML = fivedayforecast[i].main.temp_max.toFixed(0) + " °F" ; 
     

      let icon = document.getElementById(`icon${i+1}`)
      icon.setAttribute('src', `https://openweathermap.org/img/wn/${fivedayforecast[i].weather[0].icon}@2x.png`);
      icon.setAttribute('alt', fivedayforecast[i].weather[0].description);

    }

        
    });
                
              
         