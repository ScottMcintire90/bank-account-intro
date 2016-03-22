



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

    $("h4#user-name").text(userName);

    resetFields();
  });
});
