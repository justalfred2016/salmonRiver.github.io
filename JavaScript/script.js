const hambutton = 
document.getElementsByClassName("ham")[0];
hambutton.addEventListener("click",toggleMenu,false);

function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
};
const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5606275&units=imperial&APPID=47c4e1b3676af835b875196a9383c9fd'
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



   const pulled= "https://raw.githubusercontent.com/justalfred2016/salmonRiver.github.io/master/riverguides.json"
   fetch(pulled)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsObject) {
      console.log(jsObject);
      const employees = jsObject['employees'];
      for (let i = 0; i < employees.length; i++) {
          let card = document.createElement('section');
          let h1 = document.createElement('h1');

          h1.textContent = employees[i].firstName + ' ' + employees[i].lastName;

          card.appendChild(h1);

          document.querySelector('div.cont').appendChild(card);
          //date of birth paragraph 
          let age = document.createElement('p');

          age.textContent = "Age:" + " " + employees[i].Age;

          card.appendChild(age);

          document.querySelector('div.cont').appendChild(card);
          //Place of birth
          let position = document.createElement('p');
          position.textContent = "Position:" + " " + employees[i].Position;

          card.appendChild(position);

          document.querySelector('div.cont').appendChild(card)
          let exp = document.createElement('p');
          exp.textContent = "Experience:" + " " + employees[i].Experience;

          card.appendChild(exp);

          document.querySelector('div.cont').appendChild(card)
          let Motto = document.createElement('p');
          Motto.textContent = "Motto:" + " " + employees[i].Motto;

          card.appendChild(Motto);

          document.querySelector('div.cont').appendChild(card)

          let image = document.createElement('img');
          image.setAttribute('src', employees[i].img);
          image.setAttribute("alt", employees[i].firstName + " " + employees[i].lastName);
          card.appendChild(image);

          document.querySelector('div.cont').appendChild(card);
      }
  });