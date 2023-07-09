const API_KEY = `create your own from openweather`




const search = document.querySelector("#search")
const form = document.querySelector("form")
const weather = document.querySelector("#weather")


const getweather = async (city) => {
   weather.innerHTML = `<h5>Loading...</h5>`

   const url = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

   const response = await fetch(url);
   const data = await response.json()
   console.log(data)
   return showWeather(data);
}

const showWeather = (data) => {
   if(data.cod == '404'){
      weather.innerHTML = `<h5 style="font-size:20px; color:red;">Oops! City not found!</h5>`
   }

   weather.innerHTML = `
<div>
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div class="detail">
<h2>
${Math.round(data.main.temp)}°C
</h2>
<h5>
${data.weather[0].main}
</h5>
</div>
`
}

form.addEventListener("submit", function (event) {
   getweather(search.value);
   event.preventDefault();
})



const mute =document.getElementById('mute')

function toggleSound() {
   myVid=document.getElementById("audio");
   if(myVid.muted==true){
      myVid.muted=false;
   }
   else{
      myVid.muted=true;

   }
   
   

 }
