$(function() {
  const $nav = $('#nav li'),
    unorderedList = 'ul',
    hoverClass = 'hover';

  $nav
    .hover(function() {
     $(this).toggleClass(hoverClass).find(unorderedList).toggle();
    });
});


		
//Q1 Is there another method to specify $(document).ready?
ans yes there are several ways one the way is $(function() {}
                                                
//when do we use => function
ans we use it for one the main reasons when we want our "this" to be lexically binded and not by any other object that calls it   

//What is the difference between "mouseover" and "mouseenter" event?						
The mouseover event triggers when the mouse pointer enters the div element, and its child elements. 
The mouseenter event is only triggered when the mouse pointer enters the div element it does not propagate up the document hierarchy.

//And which one should be used here?
both mouseover or mouseenter if used along with out functions like
						
$nav
  .mouseover(function() {
    $( this ).addClass(hoverClass).find(unorderedList).show();
  })
  .mouseout(function() {
     $( this ).removeClass(hoverClass).find(unorderedList).hide();
  });


or 

$nav
  .mouseenter(function() {
    $( this ).addClass(hoverClass).find(unorderedList).show();
  })
  .mouseleave(function() {
     $( this ).removeClass(hoverClass).find(unorderedList).hide();
  });


will show the correct functinality so both can be used whereas if used as a single handler both of them
can not be used beacuse the functionality that we are trying to achieve does not work properly
in both the cases classes remain attached to the $nav even after moving out of div




						
  
  
