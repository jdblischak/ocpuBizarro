$(document).ready(function() {
  $("#submitbuttonnumber").on("click", function() {
    $("#submitbuttonnumber").attr("disabled", "disabled");
    var mynumber = parseFloat($("#numberfield").val());
    $("#inputnumber").text(mynumber + "(" + typeof mynumber + ")");
    var req = ocpu.call(
      "bizarro",
      {
        x: mynumber
      },
      function(session) {
        session.getConsole(function(outtxt) {
          $("#consolenumber").text(outtxt);
        });
        session.getObject(function(data) {
          $("#outputnumber").text(data[0] + "(" + typeof data[0] + ")");
        });
      }
    );
    req.fail(function() {
      alert("Server error: " + req.responseText);
    });
    req.always(function() {
      $("#submitbuttonnumber").removeAttr("disabled");
    });
  });
});
