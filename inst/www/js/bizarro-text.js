$(document).ready(function() {
  $("#submitbuttontext").on("click", function() {
    $("#submitbuttontext").attr("disabled", "disabled");
    var mytext = $("#textfield").val();
    $("#inputtext").text('"' + mytext + '"' + "(" + typeof mytext + ")");
    var req = ocpu.call(
      "bizarro",
      {
        x: mytext
      },
      function(session) {
        session.getConsole(function(outtxt) {
          $("#consoletext").text(outtxt);
        });
        session.getObject(function(data) {
          $("#outputtext").text(
            '"' + data[0] + '"' + "(" + typeof data[0] + ")"
          );
        });
      }
    );
    req.fail(function() {
      alert("Server error: " + req.responseText);
    });
    req.always(function() {
      $("#submitbuttontext").removeAttr("disabled");
    });
  });
});
