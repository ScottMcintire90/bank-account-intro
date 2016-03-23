function resetFields() {
    $("input#new-name").val("");
    $("input#deposit").val("");
    $("input.new-withdraw").val("");
    $("input.new-deposit").val("");
}


$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();

    var userName = $("input#new-name").val();
    var deposit = parseInt($("input#deposit").val());

    $("#show-results").show();
    $(".user-name").text(userName);
    $(".account-balance").text(deposit);

    resetFields();
  });

});
