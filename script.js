//Change your code so that it takes the user's input and makes the 
//AJAX request based on that input.

// var source = $('#city-template').html();
// var template = Handlebars.compile(source);

//  var searchCity = function () {
//   var url;
//     if ($(".search").val().length > 0){

//       if ($(".search").val()) {
//           alert("im not empty");
//           var getCity = $(".search").val();
//           url = 'http://www.api.openweathermap.org/data/2.5/weather?q=' + getCity + '&appid=b1b15e88fa797225412429c1c50c122a1';
//           fetch(url);
//       } else { 
//         alert("please fill in city name"); }

//     $(".search").val("");//clear input field
// };

var fetch = function (url) {
    $.ajax({
      method: "GET",
      url: 'http://samples.openweathermap.org/data/2.5/weather?q=Tokyo&appid=b1b15e88fa797225412429c1c50c122a1',
      dataType: "json",
      success: function(data) {
        console.log(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 



//   $.ajax({ 
//     method: "GET",
//     url: url,
//     dataType: "json",

//     success: function(data) { //callback function that runs when request succeeds
//         console.log(data);
//         var previewCity = function(){ //inner callback function
          
//             //var name = data.items[0].volumeInfo.title; //objectName.objectArray[index].property.innerProperty
//             //var authors = data.items[0].volumeInfo.authors;
//             var description = data.items[0].weather.description;
            


        
           

//             var newHTML = template(book);

//             $(".preview").empty();
//             $(".preview").append(newHTML); 
//             //$(".preview").empty().append(newHTML); 
//           };

//     previewCity(); //invoking function
    
//     }, //end of success function

//     //callback function that runs when request fails 
//       error: function(jqXHR, textStatus, errorThrown) {
//         console.log(textStatus);
//     }    
//   }); //end of $ajax
// }; //enf of fetch function

