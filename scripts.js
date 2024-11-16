const apiKey = "4cf7e8a4d2988519c523f2a60265e47d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const name = document.getElementById("city");
const btnOpen = document.querySelector('#openDialog');
const btnClose = document.querySelector('#closeDialog');
const dialog = document.querySelector('#myDialog');

function searchweather(){
    console.log(name);
    if(name.value==''){
        dialog.showModal();
    }

    checkWeather()
}
btnClose.addEventListener('click', () => {
    dialog.close();
});

document.getElementById("city").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        // Check if Enter key is pressed
        document.getElementById("search-btn").click();
        // Trigger button click
    }
});

async function checkWeather() {
    const response = await fetch(apiUrl+`${name.value}`+`&appid=${apiKey}`);
    var data = await response.json();
    if(data.message=="city not found"){
        dialog.showModal();
        document.getElementById("display_name").innerHTML = "city";
        document.getElementById("temperature").innerHTML =  "0°C";
        document.getElementById("Humidity").innerHTML = "0%";
        document.getElementById("Wind").innerHTML = "0km/hr";
        return;
    }
    console.log(data);
    
    document.getElementById("display_name").innerHTML = data.name;
    document.getElementById("temperature").innerHTML = Math.round(data.main.temp)+ "°C";
    document.getElementById("Humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("Wind").innerHTML = data.wind.speed + "km/hr";
}






