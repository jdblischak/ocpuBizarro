//init this script when the page has loaded
$(document).ready(function(){
  $("#submitbuttonnumber").on("click", function(){
    $("#submitbuttonnumber").attr("disabled", "disabled");
    var mynumber = parseFloat($("#numberfield").val());
    var req = ocpu.rpc("bizarro", {
      x : mynumber
    }, function(output){
      $("#outputnumber").text(output);
    });
    req.fail(function(){
      alert("Server error: " + req.responseText);
    });
    req.always(function(){
      $("#submitbuttonnumber").removeAttr("disabled")
    });
  });
});
