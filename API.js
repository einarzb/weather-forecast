var storageCity = {cities:[]};
var id = 0;

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

var createCity = function (data) {
      var cityName = data.name;
      var description = data.weather[0].description;
      var currentId = id++;

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

      var cityInfo = {
        cityName:cityName,
        description:description,
        dateString,dateString,
        celsius:celsius,
        fahrenheit:fahrenheit,
        iconWeather:iconWeather,
        humidity:humidity,
        wind:wind,
        currentId:currentId,
        cityCheck:cityCheck, //boolean to iterate the handle bar
        comments:[] //an array of comments
        };//end object

        return cityInfo;
};

var addCity = function (cityInfo) {
      storageCity.cities.push(cityInfo); //object.property.push(object)
      console.log(storageCity);
};

var fetch = function (url) { //data 
  $.ajax({
    method: "GET",
    url: url,
    dataType: "json",

    success: function(data) { //data is the object
      //console.log(data);
       var cityInfo = createCity(data); //var holds the function createcity that returned cityInfo
       addCity(cityInfo);
       renderCities();


    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
};//end fetch function

var getCityById = function (currentId) {
  for (var i = 0; i < storageCity.cities.length; i++) {
    if(storageCity.cities[i].currentId === currentId){
      return i; //returns location of current city
    }
  };
}

var addComment = function (comment,currentId) {
      var i = getCityById(currentId);
      storageCity.cities[i].comments.push(comment); //stuck in here
      renderCities();
};

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

      var currentId = $(this).data().id;
  //invoking
 addComment(comment,currentId);

  // var newHTML = commentTemplate(storageComment);
  //   $(".commentsDisplay").empty();
  //   $(".commentsDisplay").append(newHTML); 

});//end func

//view
var renderCities = function () {
  var source = $('#city-template').html();
  var template = Handlebars.compile(source);
  $(".cityDisplay").empty();

  for (var i = 0; i < storageCity.cities.length; i++) {
      var newHTML = template(storageCity.cities[i]); //templates only takes objects! //arr[i]
      $(".cityDisplay").append(newHTML);
    }
};






//http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d703871f861842b79c60988ccf3b17ec",