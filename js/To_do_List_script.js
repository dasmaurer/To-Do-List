$(document).ready(function() {
  $("#agregarTarea").click(function() {
    $("#table tbody").append(
      $("<tr>")
        .append($("<td>").append($("#titulo").val()))
        .append($("<td>").append($("#").val()))
        .append($("<td>").append($("<input>").val()))
    );
  });
});
