function myFunction(){
    var day = new Date().getDay();
    if(day === 4){
     document.getElementById("message").style.display = "block";
    }else{
       document.getElementById("message").style.display = "none";
      }
       };

myFunction()



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
      
