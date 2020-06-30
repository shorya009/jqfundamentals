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
