//init this script when the page has loaded
$(document).ready(function(){
  $("#submitbuttonboolean").on("click", function(){
    $("#submitbuttonboolean").attr("disabled", "disabled");
    var myboolean = ($("#booleanfield").val() == "true");
    $("#inputboolean").text(myboolean + "(" + typeof(myboolean) + ")");
    var req = ocpu.call("bizarro", {
      x : myboolean
    }, function(session){
      session.getConsole(function(outtxt){
            $("#consoleboolean").text(outtxt);
        });
      session.getObject(function(data){
            $("#outputboolean").text(data[0] + "(" + typeof(data[0]) + ")");
        });
    });
    req.fail(function(){
      alert("Server error: " + req.responseText);
    });
    req.always(function(){
      $("#submitbuttonboolean").removeAttr("disabled")
    });
  });
});
