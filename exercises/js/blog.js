let heading = $('#blog').find('h3');

heading.bind("click", function(e) {

  $(this).siblings('p').slideToggle("slow");
  $(this).parent().siblings().find('p:visible').slideUp("slow");
  e.preventDefault();

});
