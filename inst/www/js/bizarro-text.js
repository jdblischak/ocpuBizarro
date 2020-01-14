$(document).ready(function(){
  $("#submitbuttontext").on("click", function(){
    $("#submitbuttontext").attr("disabled", "disabled");
    var mytext = $("#textfield").val();
    var req = ocpu.rpc("bizarro", {
      x : mytext
    }, function(output){
      $("#outputtext").text(output);
    });
    req.fail(function(){
      alert("Server error: " + req.responseText);
    });
    req.always(function(){
      $("#submitbuttontext").removeAttr("disabled")
    });
  });
});
