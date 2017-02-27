

var getName = function () {
  var url;

  if($(".search").val().length > 0){

    var getName = $(".search").val();  
    $(".search").val("");  
    url = 'http://api.openweathermap.org/data/2.5/weather?q=' + getName + '&appid=d703871f861842b79c60988ccf3b17ec';
    fetch(url);
    } else {alert("please fill in city name");}
};

var fetch = function (url) {
  $.ajax({
    method: "GET",
    url: url,
    dataType: "json",

    success: function(data) { //data is the object
      console.log(data);
      var source = $('#city-template').html();
      var template = Handlebars.compile(source);

      var cityName = data.name;
      var description = data.weather[0].description;

      var dateString = new Date();
      $(this).text = dateString.getDay();
      var dateString = new Date(dateString).toUTCString();
      var dateString = dateString.split(' ').slice(0, 5).join(' ');
      var temp = data.main.temp;
      var celcius = (temp -32) * (5 / 9);
      var iconWeather = data.weather[0].icon;

      console.log(cityName);
      console.log(iconWeather);
      console.log(temp);
      console.log(celcius);
      console.log(dateString);

      var cityInfo = {
        cityName:cityName,
        description:description,
        dateString,dateString,
        temp:temp,
        iconWeather:iconWeather
       };//end object

      var newHTML = template(cityInfo);
      $(".cityDisplay").empty();
      $(".cityDisplay").append(newHTML); 
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
};





//http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d703871f861842b79c60988ccf3b17ec",