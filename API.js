var storageCity = {cities:[]};

var getName = function () {
  var url;

  if($(".search").val().length > 0){

    var getName = $(".search").val();  
    $(".search").val("");  
    url = 'http://api.openweathermap.org/data/2.5/weather?q=' + getName + '&appid=d703871f861842b79c60988ccf3b17ec';
    fetch(url);
    } else {alert("please fill in city name");}
};

var addCity = function (cityInfo) {
      storageCity.cities.push(cityInfo); //object.property.push(object)
      //console.log(storageCity);
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
      var temp = data.main.temp;
      var celcius = (temp -32) * (5 / 9);
      var iconWeather = data.weather[0].icon;
      var cityCheck = true; //boolean for iteration

      // console.log(cityName);
      // console.log(iconWeather);
      // console.log(temp);
      // console.log(celcius);
      // console.log(dateString);

      var cityInfo = {
        cityName:cityName,
        description:description,
        dateString,dateString,
        temp:temp,
        iconWeather:iconWeather,
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

var addComment = function (comment) {
      console.log($(this).parent());
      console.log($(this));
      console.log($(this).parent().siblings(".typeComment"));
      // $(this).comments.push(comment)
      //object.property.push(object)
      //storageComment.posts.push(comment); 
      // console.log(cityInfo.comments);
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
      postCheck:postCheck //boolean to iterate the handle bar
     };//end object

  console.log(comment);

  //invoking
 addComment(comment);

  // var newHTML = commentTemplate(storageComment);
  //   $(".commentsDisplay").empty();
  //   $(".commentsDisplay").append(newHTML); 

});//end func








//http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d703871f861842b79c60988ccf3b17ec",