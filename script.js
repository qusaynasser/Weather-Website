
const apiKey="9f3332ecb6035bbefc49ade48853dd07";
const btn=document.querySelector('button');
const nameCity=document.querySelector('input');
const weatherIcon=document.querySelector('.wheather img');
console.log(nameCity);
    
    const checkWeather=async (nameCity)=>{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${nameCity}&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);

        if(response.status==404)
        {
            document.querySelector(".error").style.display="block";
            document.querySelector(".wheather").style.display="none";
        }
        else
        {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "./images/clouds.png";
            }
            else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "./images/clear.png";
            }
            else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "./images/rain.png";
            }
            else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "./images/drizzle.png";
            }
            else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "./images/mist.png";
            }
            document.querySelector(".wheather").style.display = "block";
            document.querySelector(".error").style.display="none";
        }

    }
    
    btn.addEventListener('click',()=>{
        checkWeather(nameCity.value);
    });








