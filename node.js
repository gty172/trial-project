function searching(event) {
  event.preventDefault();
  let searchBar = document.querySelector("#bar");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchBar.value}`;

  let city = searchBar.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchBar.value}&key=3fb0bbe33af251f3818a451o59ta25f7&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function updateInfo() {
  let myDate = new Date();
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let hour = myDate.getHours();
  let minutes = myDate.getMinutes();
  let myDay = days[myDate.getDay() - 1];
  let dateFormat = `${myDay} ${hour}:${minutes}`;
  let inputDate = document.querySelector("#currentDate");
  inputDate.innerHTML = dateFormat;
}

function displayTemp(response) {
  let tempSection = document.querySelector("#numeralTemp");
  tempSection.innerHTML = Math.round(response.data.temperature.current);
}

let searchButton = document.getElementById("search");

searchButton.addEventListener("click", searching);
searchButton.addEventListener("click", updateInfo);
