function generateWindFactor(temp, windSpeed) {    
    let windChillFactor = 0;
    
    if ((temp <= 50)  && (windSpeed > 3.0))
    {
        windChillFactor = 35.74 + (0.6215 * temp) - (35.75 * Math.pow( windSpeed,0.16)) + (0.4275 * windChillFactor * Math.pow( windSpeed,0.16));        
        return windChillFactor.toFixed(2);
    } else{
        return 'N/A';
    }
}

function getWindFactor()
{
    try {
        let temp = document.getElementById("temp").textContent;
        let windSpeed = document.getElementById("windSpeed").textContent;
    
    
        let windChillFactor = generateWindFactor(temp, windSpeed);
        document.getElementById("chill").textContent = windChillFactor;    

    } catch (error) {
        alert("Syntax Error");
    }
    
}

getWindFactor();
