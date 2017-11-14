$(document).ready(function(){
  //CARGAR FORO
  $("#comentarButton").on("click", comentar);
  $.ajax({
    url : "data/cargarForoService.php",
    type : "GET",
    dataType : "json",
    success : function(foros){
      
      var agregarhtml;

      for(var i = 0; i < foros.length; i++)
      {
        agregarhtml += '<tr id=' + foros[i].id + ' class="foroxx">' + '<td>' + foros[i].id + '</td>' + '<td>' + foros[i].titulo + '</td>' + '<td>' + foros[i].nombre + '</td>' + '<td>' + foros[i].fecha + '</td>' + '</tr>';
      }
      $("#forito").append(agregarhtml);
    },
    error : function(errorMessage){
      console.log(errorMessage.responseText);
    }

  });

  $('.foroxx').click(function() {
        var href = $(this).attr("id");
            console.log(href);
    });

   $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

 $('.timepicker').pickatime({
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });

 
     
  
  $('.modal').modal({
      dismissible: false,
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) {
        console.log(modal, trigger);
      },
      complete: function() {  }
  });
});

function comentar()
{
  Materialize.updateTextFields();
}

