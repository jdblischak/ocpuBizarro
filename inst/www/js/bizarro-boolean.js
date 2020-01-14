//init this script when the page has loaded
$(document).ready(function(){
  $("#submitbuttonlogical").on("click", function(){
    $("#submitbuttonlogical").attr("disabled", "disabled");
    var mylogical = ($("#logicalfield").val() == "true");
    var req = ocpu.rpc("bizarro", {
      x : mylogical
    }, function(output){
      $("#outputlogical").text(output);
    });
    req.fail(function(){
      alert("Server error: " + req.responseText);
    });
    req.always(function(){
      $("#submitbuttonlogical").removeAttr("disabled")
    });
  });
});
