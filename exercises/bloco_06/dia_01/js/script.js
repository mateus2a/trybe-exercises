// Validando Data
var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});


$('#save').click(function() {
  let inputName = $('#name').val();
  let inputEmail = $('#email').val();
  let inputDate = $('#datepicker').val();

  $('#paragraph-one').append(inputName);
  $('#paragraph-two').append(inputEmail);
  $('#paragraph-three').append(inputDate);
});


