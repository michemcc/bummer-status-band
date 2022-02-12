function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://r6hm90o5y3.execute-api.us-east-1.amazonaws.com/s3web/submit";
         var Namere = /[A-Za-z]{1}[A-Za-z]/;
         if (!Namere.test($("#name-input").val())) {
                      alert ("Name must be greater than 2 characters");
             return;
         }
         if ($("#email-input").val()=="") {
             alert ("Please enter your email id");
             return;
         }
         var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
         if (!reeamil.test($("#email-input").val())) {
             alert ("Please enter valid email address");
             return;
         }

    var name = $("#name-input").val();
    var email = $("#email-input").val();
    var desc = $("#description-input").val();
    var data = {
       name : name,
       email : email,
       desc : desc
     };

    $.ajax({
      type: "POST",
      url : "https://r6hm90o5y3.execute-api.us-east-1.amazonaws.com/s3web/submit",
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      success: function () {
        // clear form and show a success message
        alert("Successful");
        document.getElementById("get-in-touch-form").reset();
    location.reload();
      },
      error: function () {
        // show an error message
        alert("Message sent");
        document.getElementById("get-in-touch-form").reset();
    location.reload();
      }});
  }
