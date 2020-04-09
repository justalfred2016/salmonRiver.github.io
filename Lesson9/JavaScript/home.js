const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json ';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.log(jsonObject)
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || "Soda Springs"||"Fish Haven"){
         
         
            let card = document.createElement('section')
            let h2 = document.createElement('h2');
            let motto = document.createElement('h3');
            let birth = document.createElement('p');
            let currentpopulation = document.createElement('p');
            let avrain = document.createElement('p');

            birth.textContent = "Year Founded:" + " " + towns[i].yearFounded;
            currentpopulation.textContent = "Population:" + " " + towns[i].currentPopulation;
            avrain.textContent = "Annual Rainfall:" + " " + towns[i].averageRainfall;



            motto.textContent = towns[i].motto;

            h2.textContent = towns[i].name

            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(birth);
            card.appendChild(currentpopulation);
            card.appendChild(avrain);
            if (towns[i].name == "Preston")
    document.querySelector('.flex').appendChild(card);
    else if (towns[i].name == "Soda Springs")
    document.querySelector('.flex2').appendChild(card);
    else if (towns[i].name == "Fish Haven")
    document.querySelector('.flex3').appendChild(card);




            }
        }
    });

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (i == 0) { continue }
            if (i == 2) { continue }
            if (i == 3) { continue }
            if (i == 6) { continue }

            let holiday = document.createElement('section');
            let event = document.createElement('p');
            event.textContent = towns[i].events;
            holiday.appendChild(event)
            document.querySelector('section.events').appendChild(holiday);
        }})
      