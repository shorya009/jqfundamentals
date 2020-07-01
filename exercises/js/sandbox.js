-------------SELECTING-----------------


Q1 // Select all of the div elements that have a class of "module".
$('div.module');

Q2 // Come up with three selectors that you could use to get the third item in the #myList unordered list. Which is the best to use? Why?

$('#myListItem');
// this one is best -- IDs are *always* the fastest selector

$('#myList li:eq(2)');
// this one would be best if the list item didn't have an ID

$('#myList #myListItem');
// this one is redundant

Q3// Select the label for the search input using an attribute selector.
$('label[for="q"]');

Q4// Figure out how many elements on the page are hidden.
$(':hidden').length;

Q5// Figure out how many image elements on the page have an alt attribute.
$('img[alt]').length;

Q6// Select all of the odd table rows in the table body.
$('#fruits tbody tr:odd');
// I used the ID for the table to quickly localize the search

$('tbody tr:odd');
//general way



-----------------TRAVERSING----------------

//Q1 Select all of the image elements on the page; log each image's alt attribute.

$('img').each((index,element)=> {
	var $img = $(element);
	console.log($img.attr('alt'));
});

//Q2 Select the search input text box, then traverse up to the form and add a class to the form.
$('input[name="q"]').closest('form').addClass('foo');

//Q3 Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.
$('#myList li.current').removeClass('current').next().addClass('current')

// Q4 Select the select element inside #specials; traverse your way to the submit button.

$('#specials select').parent().next().find('input.input_submit');

or

$('#specials select').parent().next().find('input[type="submit"]');

//Q5 Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.

$('#slideshow li:first')
	.addClass('current')
	.siblings()
		.addClass('disabled');



--------------------------MANIPULATING-------------------------

//Q1 Add five new list items to the end of the unordered list #myList.

let element = $('#mylist')
let itemNumber = 8
let i = 0
const elementsToAdd = 5

while(i < elementsToAdd){
  $(`<li>List item ${itemNumber}</li>`).appendTo('#myList')
++itemNumber
++i

}

//Q2 Remove the odd list items

$('#myList li:odd').remove();

//Q3 Add another h2 and another paragraph to the last div.module

$('div.module')
	.append('<h2>new heading</h2>')
	.append('<p>new paragraph</p>');

//Q4 Add another option to the select element; give the option the value "Wednesday"

$('select').append('<option value="wednesday">Wednesday</option>');


//Q5 Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.

let $img = $('img:first');
let $newDiv = $('<div class="module"/>');
$newDiv.appendTo('div.module:last').append($img);


