/**
 * @author Eyal Ron
 * @create date 2019-10-23 15:40:17
 * @modify date 2019-10-23 17:01:39
 */

/** need the import of jqueryvalidation: https://jqueryvalidation.org/documentation/ */
// Wait for the DOM to be ready
jQuery(document).ready(function () {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    jQuery(".divine_validation form").each(function () {
        jQuery(this).validate({
            // Specify validation rules
            rules: {
                debug: false,
                // The key name on the left side is the name attribute
                // of an input field. Validation rules are defined
                // on the right side
                "form_fields[client_num]": {
                    required: true,
                    minlength: 9,
                    maxlength: 9,
                    num_start: true
                },
                "form_fields[phone]": {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                    phone_start: true
                }
            },
            // Specify validation error messages
            messages: {
                "form_fields[client_num]": {
                    required: "נא הכנס מספר לקוח",
                    minlength: "מספר לקוח לא תקין - יש להזין מספר בן 9 ספרות",
                    maxlength: "מספר לקוח לא תקין - יש להזין מספר בן 9 ספרות",
                    num_start: "מספר לקוח חייב להתחיל באחד מהצרופים הבאים: 411, 96, 95"
                },
                "form_fields[phone]": {
                    required: "נא להזין מספר טלפון נייד בעל 10 ספרות המתחיל ב 05",
                    minlength: "נא להזין מספר טלפון נייד בעל 10 ספרות המתחיל ב 05",
                    maxlength: "נא להזין מספר טלפון נייד בעל 10 ספרות המתחיל ב 05",
                    phone_start: "נא להזין מספר טלפון נייד בעל 10 ספרות המתחיל ב 05"
                }
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function (form) {
                form.submit();
            }
        });
    });
});

/** validate client number start with 411,96,95 */
jQuery.validator.addMethod("num_start", function (value, element) {
    var startA = value.startsWith("411");
    var startB = value.startsWith("96");
    var startC = value.startsWith("95");
    console.log('startA: ' + startA);
    return this.optional(element) || startA || startB || startC;
});
/** validate phone as 10 digits and start with 05 */
jQuery.validator.addMethod("phone_start", function (value, element) {
    var startPhone = value.startsWith("05");
    console.log('startPhone: ' + startPhone);
    return this.optional(element) || startPhone;
});