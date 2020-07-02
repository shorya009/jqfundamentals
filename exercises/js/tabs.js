$(document).ready(function() {

  let $modules = 'div.module';
  $(`${$modules}`).hide();
  let unorderedList = $('<ul></ul>').insertBefore($(`${$modules}:first`));


  $(`${$modules}`).each((index, element) => {
    let module = $(element);

    let title = (module.find('h2'));

    let listItems = $(`<li>${title.text()}</li>`).appendTo(unorderedList);

    listItems.bind("click", function() {

      $(listItems).addClass('current').siblings().removeClass('current');
      module.show().siblings('.module').hide();

    });
  });

  $(`${$modules}`).hide().eq(0).show();
  $(unorderedList).find('li:first').addClass('current');

});
