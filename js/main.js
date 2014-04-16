$(function() {
    $('#datetimepicker1').datetimepicker({
      language: 'pt-BR'
    });
  
    $.fn.datetimepicker.defaults = {
      maskInput: true,           // disables the text input mask
      pickDate: true,            // disables the date picker
      pickTime: true,            // disables de time picker
      pick12HourFormat: true,   // enables the 12-hour format time picker
      pickSeconds: true,         // disables seconds in the time picker
      startDate: -Infinity,      // set a minimum date
      endDate: Infinity          // set a maximum date
    };

  });