$(document).ready(function() {
  const nav = $('#nav li');
  nav.hover(
    () => { //hover
      $(this).addClass('hover').find('ul').show();
    },
    () => { //out
      $(this).removeClass('hover').removeClass('hover')
        .find('ul').hide();
    }
  );
});
