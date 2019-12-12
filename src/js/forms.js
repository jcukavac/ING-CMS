import { formCheck } from './utility';

/**
 *
 * @description Load code for handling the forms
 */
export function formsRelated() {

    // Mimic the select tag with divs
    $('#dropdown-select .dropdown-item').on('click', function () {
        $('#select-field-inquiry').val(
            $(this)
                .text()
                .trim()
        );
        $('#select-inquiry').text($(this).text()).css({
            'font-style': 'normal',
            'color': '#e31080'
        });
    });

    // Contact Us form submit
    $('.contact-us-form').on('submit', function (e) {
        // Forbidden list of email providers
        //let reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)(?!mail.com)(?!yandex.com)(?!protonmail.com)(?!protonmail.ch)([\w-]+\.)+[\w-]{2,4})?$/;
        let nameForm = $('#input-name-form').val();
        let passForm = $('#input-email-form').val();
        let compForm = $('#input-company-form').val();
        let dropdownForm = $('#select-field-inquiry').val();
        let msgForm = $('#input-msg-form').val();


        // When user entered correct email - business email allow the form to be submitted,
        // otherwise print to the UI error message and empty the input
        if (nameForm.trim() === '') {
            e.preventDefault();
            formCheck('name-help', 'input-name-form');
            return;
        } else if (passForm.trim() === '') {
            e.preventDefault();
            formCheck('email-help', 'input-email-form');
            return;
        } else if (compForm.trim() === '') {
            e.preventDefault();
            formCheck('company-help', 'input-company-form');
            return;
        } else if (msgForm.trim() === '') {
            e.preventDefault();
            formCheck('msg-help', 'input-msg-form');
            return;
        } else if (dropdownForm.trim() === '') {
            $('#select-field-inquiry').val('Basic Inquiry');
        }

        $(this).submit();
    });

    // Subscribe form submit
    $('.subscribe-form').on('submit', function (e) {
        let subscribeEmail = $('#subscribe-email').val();

        if (subscribeEmail.trim() === '') {
            e.preventDefault();
            formCheck('subscribe-help', 'subscribe-email');
            return;
        } else {
            $(this).submit();
        }
    });

} 
