$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();

    $("#warning-responses").show();
    var warningModes = $("input:checkbox[name=stress-warning]:checked");
    warningModes.each(function(){
      var stressWarningMode = $(this).val();
      $('#warning-responses').append(stressWarningMode + "<br>");
    });

    $("#health-responses").show();
    var healthModes = $("input:checkbox[name=stress-health]:checked")
    healthModes.each(function(){
      var stressHealthMode = $(this).val();
      $('#health-responses').append(stressHealthMode + "<br>");
    });

    $("#stress-responses").show();
    var reduceModes = $("input:checkbox[name=stress-reduce]:checked")
    reduceModes.each(function() {
      var stressReduceMode = $(this).val();
      $('#stress-responses').append(stressReduceMode + "<br>");
    });

    $('#transportation_survey').hide();

    if(warningModes.length > reduceModes.length) {
      alert("You are stressed and not doing anything about it!");
    } else {
      alert("Good");
    }

  });
});
