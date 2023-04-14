// Object Activity 1
// Below is an object called currentWeather
const currentWeather = {
  weather: "Rain",
  temp: 50,
  sky: "Overcast",
  details: ["Moderate Rain", 45, "Not Severe"]
};
//Print a string that refernces weather, temp, and sky:
console.log(`The weather is ${currentWeather.weather}`)
console.log(`The temperature is ${currentWeather.temp}`)
console.log(`The sky is currently ${currentWeather.sky}`)
//Accessing the details key, Print another string that references each of the properties contained within details
let weatherDetails = "These are the weather details: ";
for(let detail of currentWeather.details){
  weatherDetails += `${detail} `;
}
