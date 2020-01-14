//init this script when the page has loaded
$(document).ready(function(){
  $("#submitbuttonboolean").on("click", function(){
    $("#submitbuttonboolean").attr("disabled", "disabled");
    var myboolean = ($("#booleanfield").val() == "true");
    var req = ocpu.rpc("bizarro", {
      x : myboolean
    }, function(output){
      $("#outputboolean").text(output);
    });
    req.fail(function(){
      alert("Server error: " + req.responseText);
    });
    req.always(function(){
      $("#submitbuttonboolean").removeAttr("disabled")
    });
  });
});
