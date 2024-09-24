const getDataBtn =document.getElementById("getdata")
const temp =document.getElementById("temp")
const isDayOrNight =document.getElementById("isDayOrNight")
const informationDiv = document.getElementById("information")

//create elements
const latitude = document.createElement('p') 
const longitude = document.createElement('p')
const apparentTemp = document.createElement('p')
const wind = document.createElement('p')
const rain = document.createElement('p')

//append elements
informationDiv.appendChild(latitude)
informationDiv.appendChild(longitude)
informationDiv.appendChild(apparentTemp)
informationDiv.appendChild(wind)
informationDiv.appendChild(rain)


getDataBtn.addEventListener("click",async()=>{
   const weatherData=  await getWeatherData()

   //update innerText

   let dayOrNight = (weatherData.current.is_day === 1)?"Day":"Night"
   temp.innerText =`Temp: ${weatherData.current.temperature_2m} C`
   apparentTemp.innerText = `Apparent Temperature: ${weatherData.current.apparent_temperature}`
   isDayOrNight.innerText =`Is Day or Night:${dayOrNight}`
   rain.innerText = `Rain: ${weatherData.current.rain}`
   wind.innerText = `Wind: ${weatherData.current.wind_speed_10m}`
  
   console.log(weatherData)
   

})
    async function getWeatherData(){
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=23&longitude=83&current=temperature_2m,apparent_temperature,is_day,rain,wind_speed_10m&hourly=temperature_2m')
        const data = await response.json()
    return data
}
 /*
 
 https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m
 
 async funct  ion example(){
    console.log("before timeout")
     await setTimeout(()=>{
        console.log("inside timeout")
    },5000)
   await console.log("after timeout")
}
//let dataAyaKya =true

//let weatherData = new Promise(function(res,rej){
setTimeout(()=>{
    if(dataAyaKya === true){
        res("Weather Achha h");
    }
    else{
       rej("Data nhi aaya");
    }
},5000)

console.log(weatherData)

weatherData.
then((data)=>{
    console.log(data)
})
catch((data)=>{
    console.log(data)
})
    */
