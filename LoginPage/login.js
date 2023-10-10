$(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})

    document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});

    $(document).ready(function() {
        $('#loginForm').submit(function(e) {
          e.preventDefault(); // Prevent form submission
          
          // Perform AJAX request to submit the form data
          $.ajax({
            url: $(this).attr('action'), // Use the form's action attribute
            type: $(this).attr('method'), // Use the form's method attribute
            data: $(this).serialize(), // Serialize the form data
            success: function(response) {
              // Assuming the server responds with a JSON object containing a redirect URL
              if (response && response.redirectUrl) {
                window.location.href = response.redirectUrl; // Redirect to the dashboard page
              }
            },
            error: function() {
              // Handle error if login request fails
            }
          });
        });
      });

    