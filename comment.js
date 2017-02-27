var source = $('#comment-template').html();
var template = Handlebars.compile(source);

var commentMaker = function () {

  if($(".typeComment").val().length > 0){

    var getComment = $(".typeComment").val();  
    $(".typeComment").val("");  
    generator(getComment);
    } else {alert("please type in comment");}

    var generator = function(getComment){ //inner callback function
            console.log(getComment);

            var comment = {
              getComment:getComment
             };//end object

            var newHTML = template(comment);
            $(".commentDisplay").empty();
            $(".commentDisplay").append(newHTML); 
      };//end func

    commentMaker();  
}; 