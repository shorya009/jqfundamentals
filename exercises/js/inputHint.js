$(document).ready(function() {

  let $search = $('#search');
  let $input = $search.find('input.input_text');
  let hint = $search.find('label').remove().text();

  $input
    .val(hint)
    .addClass('hint')
    .bind({
      focus: function() {
        $input.val('').removeClass('hint');
      },
      blur: function() {
        $input.val(hint).addClass('hint');
      }
    });
});
