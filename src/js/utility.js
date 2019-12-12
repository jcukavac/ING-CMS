/**
 * @description Check the values of form and react appropriate
 * @param {String} whatErrorHolder
 * @param {String} whatInputField
 *
 */

export function formCheck(whatErrorHolder, whatInputField) {
    $(`#${whatErrorHolder}`).show();
    $(`#${whatInputField}`).addClass('red-border');
    $('html, body').animate(
        { scrollTop: $(`#${whatInputField}`).offset().top - 70 },
        1000
    );
    $(`#${whatInputField}`).val('');
    setTimeout(() => {
        $(`#${whatErrorHolder}`).hide();
        $(`#${whatInputField}`).removeClass('red-border');
    }, 4000);
    return;
}