let slides = $('#slideshow li');
slides.hide();
let slideCout = 0;
let totalSlides = slides.length;

slideshow = () => {

  slides.eq(slideCout).fadeIn(1000).delay(1000).fadeOut(() => {
    slideCout < totalSlides - 1 ? slideCout++ : slideCout = 0;
    slideshow();
  });
};

$(`<ul id="nav">
<li>Total Images ${totalSlides}</li> 
</ul>`).insertAfter('#slideshow');

slideshow();
