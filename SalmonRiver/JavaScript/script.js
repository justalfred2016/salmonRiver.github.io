const hambutton = 
document.getElementsByClassName("ham")[0];
hambutton.addEventListener("click",toggleMenu,false);

function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
};
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



   const pulled= "https://github.com/justalfred2016/justalfred2016.github.io/blob/master/Json/riverGuides.js"
   fetch(pulled)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsObject) {
      console.log(jsObject);
      const prophets = jsonObject['prophets'];
      for (let i = 0; i < prophets.length; i++) {
          let card = document.createElement('section');
          let h2 = document.createElement('h2');

          h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

          card.appendChild(h2);

          document.querySelector('div.cards').appendChild(card);
          //date of birth paragraph 
          let place = document.createElement('p');

          place.textContent = "Date of birth:" + " " + prophets[i].birthdate;

          card.appendChild(place);

          document.querySelector('div.cards').appendChild(card);
          //Place of birth
          let birth = document.createElement('p');
          birth.textContent = "Place of birth:" + " " + prophets[i].birthplace;

          card.appendChild(birth);

          document.querySelector('div.cards').appendChild(card)

          let image = document.createElement('img');
          image.setAttribute('src', prophets[i].imageurl);
          image.setAttribute("alt", prophets[i].name + " " + prophets[i].lastname + " " + "-" + prophets[i].order);
          card.appendChild(image);

          document.querySelector('div.cards').appendChild(card);
      }
  });