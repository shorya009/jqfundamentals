let $h3 = $('#blog').find('h3');

$h3.each(function(index, elements) {
  let h3 = $(elements);
  $(`<div id= "post${index+1}"></div>`).appendTo(h3);
  $(this).data(`key`, `post${index+1}`);
});

$h3.bind("click", function(e) {
  e.preventDefault();
  let divId = $(this).data('key');
  $(`#${divId}`).load(`data/blog.html #${divId}`);
});
