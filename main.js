

const url = "http://dataservice.accuweather.com/currentconditions/v1/{locationKey}"
let response = await fetch(url);

if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
} else {
  alert("HTTP-Error: " + response.status);
}