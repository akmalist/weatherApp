  
  let weatherInfo = document.getElementById('weather');

  weatherInfo.addEventListener('click', function(event){
    event.preventDefault();
    var cityName = document.getElementById('cityName').value;
    console.log(cityName);
    
    var key = ' ';
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid= ";
    fetch(url)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors'
    });


    })
  




 
 
