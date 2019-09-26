$(document).ready(function() {
$("form").submit(function(event) {

  var list = $("input#shoppingList").val().split(", ");
  list.sort();
  var alphaList = list.map(function(done) {
    return done.toUpperCase();

  });

  alphaList.forEach(function(test){
    $(".done").append(test + ", ");
  });

  $("#compList").hide();
  $("#alphaList").show();

  event.preventDefault()

  });
});
