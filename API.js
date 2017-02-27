var storageCity = {cities:[]};

$("body").on("click", "#getName", function () {
  var url;
  currentCity = $(this).parent().siblings(".search").val();
  console.log(currentCity);
  //addComment(currentCity);

  if($(".search").val().length > 0){

    var getName = $(".search").val();  
    $(".search").val("");  
    url = 'http://api.openweathermap.org/data/2.5/weather?q=' + getName + '&appid=d703871f861842b79c60988ccf3b17ec';
    fetch(url);
    } else {alert("please fill in city name");}
});

var addCity = function (cityInfo) {
      storageCity.cities.push(cityInfo); //object.property.push(object)
      console.log(storageCity);
};


var fetch = function (url) {
  $.ajax({
    method: "GET",
    url: url,
    dataType: "json",

    success: function(data) { //data is the object
      //console.log(data);
      var source = $('#city-template').html();
      var template = Handlebars.compile(source);

      var cityName = data.name;
      var description = data.weather[0].description;

      var dateString = new Date();
      $(this).text = dateString.getDay();
      var dateString = new Date(dateString).toUTCString();
      var dateString = dateString.split(' ').slice(0, 5).join(' ');
      var kelvin = data.main.temp;
      var celsius = Math.round(kelvin - 273.15);
      var fahrenheit = Math.round(((kelvin - 273.15) * 9/5) + 32);
      var iconWeather = data.weather[0].icon;
      var humidity = data.main.humidity;
      var wind = data.wind.speed;

      var cityCheck = true; //boolean for iteration

      // console.log(cityName);
      // console.log(iconWeather);
      // console.log(temp);
      // console.log(celcius);
      // console.log(dateString);
      console.log(celsius);
      console.log(fahrenheit);

      var cityInfo = {
        cityName:cityName,
        description:description,
        dateString,dateString,
        celsius:celsius,
        fahrenheit:fahrenheit,
        iconWeather:iconWeather,
        humidity:humidity,
        wind:wind,
        cityCheck:cityCheck, //boolean to iterate the handle bar
        comments:[] //an array of comments
       };//end object

       addCity(cityInfo);
        
      var newHTML = template(storageCity); //templates only takes objects! 
      $(".cityDisplay").empty();
      $(".cityDisplay").append(newHTML);

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
};//end fetch function

// var addComment = function (comment, currentCity) {
//       storageCity.cities.currentCity.comments.push(comment); //stuck in here
//       console.log(cityInfo); 
// };

//this function invoked once comment button is clicked!

$("body").on("click", "#postComment", function () {
  var commentSource = $('#comment-template').html();
  var commentTemplate = Handlebars.compile(commentSource);
  
  var getComment = $(this).parent().siblings(".typeComment").val();
  $(this).parent().siblings(".typeComment").val(""); //clean input
  console.log(getComment);
  
  var postCheck = true; //boolean for iteration

  //creating object
  var comment = {
      getComment:getComment,
      postCheck:postCheck, //boolean to iterate the handle bar
      currentCity:currentCity
     };//end object

  console.log(comment);

  //invoking
 addComment(comment);

  // var newHTML = commentTemplate(storageComment);
  //   $(".commentsDisplay").empty();
  //   $(".commentsDisplay").append(newHTML); 

});//end func








//http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d703871f861842b79c60988ccf3b17ec",