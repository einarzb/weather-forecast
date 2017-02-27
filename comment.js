

var postComment = function () {

  if($(".typeComment").val().length > 0){
    alert("comment");
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

    postComment();  
}; 