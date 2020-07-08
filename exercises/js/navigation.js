$(function() {
  const $nav = $('#nav li'),
  unorderedList = 'ul',
  hoverClass = 'hover';

  $nav
    .mouseover(function() { //hover
      $(this).addClass(hoverClass).find(unorderedList).show();
    })
    .mouseout(function(){ //out
      $(this).removeClass(hoverClass).find(unorderedList).hide();
    }
  );
});



//Q1 Is there another method to specify $(document).ready?
ans yes there are several ways one the way is $(function() {}
                                                
//when do we use => function
ans we use it for one the main reasons when we want our "this" to be lexically binded and not by any other object that calls it                                             
                                                
  
  
