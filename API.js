var storageCity = [];

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

      //addCity(cityInfo); 
      storageCity.push(cityInfo);
      console.log(storageCity);   
 
      var newHTML = template(storageCity);
      $(".cityDisplay").empty();
      $(".cityDisplay").append(newHTML);

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
};//end fetch function


// var addCity = function (cityInfo) {
//     storageCity.push(cityInfo);
//     console.log(storageCity);
// };

var postComment = function () {
  var commentSource = $('#comment-template').html();
  var commentTemplate = Handlebars.compile(commentSource);

  if($(".typeComment").val().length > 0){
    var getComment = $(".typeComment").val();  
    $(".typeComment").val("");  
  } else {
    alert("please type in comment");
  }
  
  console.log(getComment);
  
  var comment = {
      getComment:getComment
     };//end object

  console.log(comment);

  var newHTML = commentTemplate(comment);
    $(".commentsDisplay").empty();
    $(".commentsDisplay").append(newHTML); 
};//end func





//http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d703871f861842b79c60988ccf3b17ec",