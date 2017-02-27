var fetch = function () {
  $.ajax({
    method: "GET",
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=d703871f861842b79c60988ccf3b17ec',
    dataType: "json",

    success: function(data) { //data is the object
      console.log(data);
      var cityWeather = function(){ //inner callback function
            var cityName = data.name;
            var description = data.weather[0].description;
            var iconWeather = data.weather[0].icon;

            console.log(cityName);
            console.log(iconWeather);

          };

    cityWeather();      
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
};


//http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d703871f861842b79c60988ccf3b17ec",