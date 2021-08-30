  
  let weatherInfo = document.getElementById('weather');

  weatherInfo.addEventListener('click', function(event){
    event.preventDefault();
    var cityName = document.getElementById('cityName').value;
    console.log(cityName);
    
    var key = '89a75e05a8fb64556b3c3f00e5032c20';
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=89a75e05a8fb64556b3c3f00e5032c20";
    fetch(url)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors'
    });


    })
  




 
 