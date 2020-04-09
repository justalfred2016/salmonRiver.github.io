const requestURL = 'http://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
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