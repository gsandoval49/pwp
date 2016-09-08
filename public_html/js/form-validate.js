$(document).ready(function(){

	/* begin validation - written in html*/
	$("#contact-form").validate({

		// setup handling of form errors
		// debug will be true to let you get stuff for debugging if it goes wrong; errorClass jquery will handle this error message on a div inside output area
		debug: true,
		errorClass: "alert alert-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",

		// rules define what is good/bad input
		// each rule starts with the form input element's NAME attribute
		// you can also do max length for each one and required
		rules: {
			name: {
				required: true
			},
			email: {
				email: true,
				required: true
			},
			message: {
				required: true,
				maxlength: 2000
			}
		},

		// error messages to display to the end user
		messages: {
			name: {
				required: "Please enter your name."
			},
			email: {
				email: "Please enter a valid email address.",
				required: "Please enter a valid email address."
			},
			message: {
				required: "Please enter a message.",
				maxlength: "2000 characters max."
			}
		},

		// jquery also needs to submit and needs to know what type, by post; and find attr = attribute named action;
		submitHandler: function(form) {
			$("#contact-form").ajaxSubmit({
				type: "POST",
				url: $("#contact-form").attr("action"),

				// upon success it will clear or display a success message
				success: function(ajaxOutput) {
					// clear the output area's formatting
					$("#output-area").css("display", "");

					// write the server's reply to the output area
					$("#output-area").html(ajaxOutput);

					// reset the form if it was successful
					if($(".alert-success").length >= 1) {
						$("#contact-form")[0].reset();
					}
				}
			})
		}

	});/* end validate function */

});/*end document.ready()*/