function getting(response) {
    let temperaturCity = document.querySelector("#tempo");
    temperaturCity.innerHTML = `${Math.round(response.data.temperature.current)}`;
    let heading = document.querySelector("h1");
    heading.innerHTML = response.data.city;

}
function searchcity(city) {
    let apikey = "795fc3dt59e943954b5e5aoc405fb9c4";
    let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&unit='metrics`;
    axios.get(apiurl).then(getting);
}   
function valuing(event) {
    event.preventDefault();    
    let forming = document.querySelector("#form1");
    searchcity(forming.value);
}
let searching = document.querySelector("#search-element");
searching.addEventListener("submit", valuing)

