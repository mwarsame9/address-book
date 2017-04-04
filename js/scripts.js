// Business Logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
};

function Address(addressType, street, city, state, zip) {
  this.addressType = addressType;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
};

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

Address.prototype.fullAddress = function () {
    return this.addressType + ": " + this.street + " " + this.city + ", " + this.state + " " + this.zip;
};

var addressFields = function (){
  $("#addressFields").append('<div class="anotherAddress">' +
  '<label for="street">Enter street</label>' +
  '<input type="text" name="street" class="form-control street">' +
  '<label for="city">Enter city</label>' +
  '<input type="text" name="city" class="form-control city">' +
  '<label for="state">Enter state</label>' +
  '<input type="text" name="state" class="form-control state">' +
  '<label for="zip">Enter zip code</label>' +
  '<input type="text" name="zip" class="form-control zip">' +
  '<label for="address-type">Select address type</label>' +
  '<select class="form-control" class="addressType">' +
    '<option selected="selected" disabled>Address type</option>' +
    '<option value="Home">Home</option>' +
    '<option value="Work">Work</option>' +
    '<option value="Business">Business</option>' +
    '<option value="Other">Other</option>' +
  '</select>' +
  '</div>');
};

var resetForm = function (){
  $("input#firstName").val("");
  $("input#lastName").val("");
  $("input.street").val("");
  $("input.city").val("");
  $("input.state").val("");
  $("input.zip").val("");
  $("select.addressType").val("");
  $("#addressFields").empty();
  addressFields();
}

// User Interface Logic
$(document).ready(function() {
  $("#anotherButton").click(function() {
    addressFields();
  });
  $("#form-one").submit(function(event) {
  event.preventDefault();

  var firstNameInput = $("input#firstName").val();
  var lastNameInput = $("input#lastName").val();
  var newContact = new Contact (firstNameInput, lastNameInput);

  $(".anotherAddress").each(function () {
    var streetInput = $(this).find("input.street").val();
    var cityInput = $(this).find("input.city").val();
    var stateInput = $(this).find("input.state").val();
    var zipInput = $(this).find("input.zip").val();
    var addressTypeInput = $(this).find("select.addressType").val();
    var newAddress = new Address (addressTypeInput, streetInput, cityInput, stateInput, zipInput);
    newContact.addresses.push(newAddress);
  });




  $("#output").append("<li><span class='clickable'>" + newContact.fullName() + "</span></li>");


  $("#output").show();
  $(".clickable").last().click(function() {
    $("#output2").show();

    $("#output2 h2").text(newContact.fullName());
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $("#addresses").text("");
    newContact.addresses.forEach(function(address) {
      $("#addresses").append("<li>" + address.fullAddress() + "</li>")
    })
  });
  resetForm();
  });
  $("#clearAnotherButton").click(function(){
    $("#addressFields").empty();
    addressFields();
  });

});
