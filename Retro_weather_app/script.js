// declaring all my variables 

const apikey = "ec876a553643fcf34126c673ae60ae7e";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const input_box = document.querySelector(".searching input");
const searchbtn = document.querySelector(".searching button");
const weatherpics = document.querySelector(".weather-pics");

// function to check weather
async function Validte_search(city) {
  const response = await fetch(api_url + city + `&appid=${apikey}`);
  var mydata = await response.json();

// if stament to display error   
  if(response.status ==404) {
   alert("invalid city  name ")
  input_box.value = "";
  } else{


   //updating text according to the city an weather conditions 
     document.querySelector(".Temperature").innerHTML = Math.round(mydata.main.temp) + " °C";
     document.querySelector(".city").innerHTML = mydata.name;
     document.querySelector(".Wind_speed").innerHTML = mydata.wind.speed + "KMP";
     document.querySelector(".Humidity").innerHTML = mydata.main.humidity + "%";
   
     //updating image according to weather conditions 
   
     if(mydata.weather[0].main=="Clouds"){
      weatherpics.src="images/clouds.png"
   
     } else if(mydata.weather[0].main=="Rain"){
      weatherpics.src="images/rain.png"
   
     } else if(mydata.weather[0].main=="Clear"){
      weatherpics.src="images/sunny.png"
   
     } else if(mydata.weather[0].main=="Mist"){
      weatherpics.src="images/mist.png"
   
     } else if(mydata.weather[0].main=="Drizzel"){
      weatherpics.src="images/drizzel.png"
   
   } else if(mydata.weather[0].main=="Snow"){
      weatherpics.src="images/snow.png"
   
   }

  }
   
  }

// function to describe what should happen when the search button is clicked
searchbtn.addEventListener("click",()=> {
  Validte_search(input_box.value);
});