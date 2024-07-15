$(document).ready(function() {

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior

            // Scroll to the target element smoothly
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling for selling items
    $('#sellForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        // Gather form data
        let formData = new FormData(this);

        // AJAX request to submit form data
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/api/submissions', // API endpoint
            data: formData,
            processData: false, // Prevent jQuery from processing data
            contentType: false, // Avoid setting content type
            success: function(response) {
                console.log('Submission successful:', response);
                $('#sellForm').hide(); // Hide the form on successful submission
                $('#submissionResult').html('Your submission was successful. Thank you!').show(); // Show success message
            },
            error: function(error) {
                console.error('Error submitting form:', error);
                $('#submissionResult').html('Error submitting form. Please try again.').show(); // Show error message
            }
        });
    });

    // Function to handle adding products to the cart
    function addToCart(productId) {
        alert(`Product with ID ${productId} added to cart.`);
    }
});
