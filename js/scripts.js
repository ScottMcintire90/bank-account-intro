function BankAccount(balance) {
this.balance = 0;
}

BankAccount.prototype.newDeposit = function(amount) {
  this.balance = this.balance + amount;
}

BankAccount.prototype.newWithdraw = function(amount) {
  this.balance = this.balance - amount;
}

function resetFields() {
    $("input#new-name").val("");
    $("input#balance").val("");
    $("input#new-withdraw").val("");
    $("input#new-deposit").val("");
}


$(document).ready(function() {

  $("form#new-account").submit(function(event) {
    event.preventDefault();

    var userName = $("input#new-name").val();
    var balance = parseInt($("input#balance").val());

    var newAccount = new BankAccount();

    newAccount.newDeposit(balance);

    $("#show-results").show();
    $(".user-name").text(userName);
    $(".account-balance").text(balance);

      $("form#deposit").submit(function(event) {
        event.preventDefault();
        var deposit = parseInt($("input#new-deposit").val());
        newAccount.newDeposit(deposit);
        $(".account-balance").text(newAccount.balance);
        
        resetFields();
      });

      $("form#withdraw").submit(function(event) {
        event.preventDefault();
        var withdraw = parseInt($("input#new-withdraw").val());
        newAccount.newWithdraw(withdraw);
        $(".account-balance").text(newAccount.balance);
        resetFields();
      });
    resetFields();
  });
});
