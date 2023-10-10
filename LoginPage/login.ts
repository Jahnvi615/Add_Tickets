// Add TypeScript type annotations
interface AjaxResponse {
  redirectUrl: string;
}

// Add type annotations to variables and functions
$(".input_text").focus(function (): void {
  $(this).prev('.fa').addClass('glowIcon');
});

$(".input_text").focusout(function (): void {
  $(this).prev('.fa').removeClass('glowIcon');
});

document.getElementById("toggle")!.addEventListener("click", function (): void {
  document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});

$(document).ready(function (): void {
  $('#loginForm').submit(function (e: JQuery.Event): void {
    e.preventDefault(); // Prevent form submission

    // Perform AJAX request to submit the form data
    $.ajax({
      url: $(this).attr('action')!, // Use the form's action attribute
      type: $(this).attr('method')!, // Use the form's method attribute
      data: $(this).serialize(), // Serialize the form data
      success: function (response: AjaxResponse): void {
        // Assuming the server responds with a JSON object containing a redirect URL
        if (response && response.redirectUrl) {
          window.location.href = response.redirectUrl; // Redirect to the dashboard page
        }
      },
      error: function (): void {
        // Handle error if login request fails
      }
    });
  });
});
