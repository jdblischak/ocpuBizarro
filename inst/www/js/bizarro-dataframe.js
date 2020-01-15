$(document).ready(function() {
  $("#submitbuttondataframe").on("click", function() {
    $("#submitbuttondataframe").attr("disabled", "disabled");
    mydataframe = [
      {
        "column_1": "obs_1",
        "column_2": true,
        "column_3": 100.3,
      },
      {
        "column_1": "obs_2",
        "column_2": false,
        "column_3": -3,
      }
    ];
    $("#inputdataframe").text(
      JSON.stringify(mydataframe, null, "\t") + "\n(" + typeof mydataframe + ")"
    );
    var req = ocpu.call(
      "bizarro",
      {
        x: mydataframe
      },
      function(session) {
        session.getConsole(function(outtxt) {
          $("#consoledataframe").text(outtxt);
        });
        session.getObject(function(data) {
          $("#outputdataframe").text(
            JSON.stringify(data, null, "\t") + "\n(" + typeof data + ")"
          );
        });
      }
    );
    req.fail(function() {
      alert("Server error: " + req.responseText);
    });
    req.always(function() {
      $("#submitbuttondataframe").removeAttr("disabled");
    });
  });
});
