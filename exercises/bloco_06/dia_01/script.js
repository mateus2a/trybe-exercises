$(document).ready(function() {
  $('#save').click(function() {
    let inputName = $('#name').val();
    let inputEmail = $('#email').val();
    let inputDate = $('#datepicker').val();

    $('#paragraph-one').append(inputName);
    $('#paragraph-two').append(inputEmail);
    $('#paragraph-three').append(inputDate);
  });
});
