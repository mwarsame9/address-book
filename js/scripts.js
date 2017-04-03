// Business Logic
var contact = function(first, last) {
  this.firstName = first;
  this.lastName = last;
}

$(document).ready(function() {
  $("#form-one").submit(function(event) {
  event.preventDefault();

  var firstNameInput = $("input#firstName").val();
  var lastNameInput = $("input#lastName").val();
  var newContact = new contact (firstNameInput, lastNameInput);

  $("#output").append("<li><span class='clickable'>" + newContact.firstName + "</span></li>");


  $("#output").show();
  $(".clickable").last().click(function() {
    $("#output2").show();

    $("#output2 h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
  });


  });

});
