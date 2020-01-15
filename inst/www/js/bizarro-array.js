$(document).ready(function() {
  $("#submitbuttonarray").on("click", function() {
    $("#submitbuttonarray").attr("disabled", "disabled");
    var array_choice = $("#arrayfield").val();
    switch (array_choice) {
      case "numbers":
        myarray = [-500, -3, 0, 1, 1000];
        break;
      case "strings":
        myarray = ["Sending", "some", "strings", "to", "R"];
        break;
      case "booleans":
        myarray = [true, false, true, false, true];
        break;
      case "heterogenous":
        myarray = ["a string", 1.2, true];
        break;
      default:
        alert("Tell John there is something wrong with the switch statement");
    }

    $("#inputarray").text(JSON.stringify(myarray) + "(" + typeof myarray + ")");
    var req = ocpu.call(
      "bizarro",
      {
        x: myarray
      },
      function(session) {
        session.getConsole(function(outtxt) {
          $("#consolearray").text(outtxt);
        });
        session.getObject(function(data) {
          $("#outputarray").text(
            JSON.stringify(data) + "(" + typeof data + ")"
          );
        });
      }
    );
    req.fail(function() {
      alert("Server error: " + req.responseText);
    });
    req.always(function() {
      $("#submitbuttonarray").removeAttr("disabled");
    });
  });
});
