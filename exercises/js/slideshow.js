class SlideShow {

  constructor(slides) {
    this.slides = slides;
    this.slideCount = 0;
    this.totalSlides = this.slides.length;
  }
  navigationArea(){
    $(`<div><span id = "current-image">1</span>
      / <span id = "total-images">${this.totalSlides}</span>
      </div>`).insertAfter('#slideshow');
  }

  slideShowCounter() {
    this.slideCount < this.totalSlides - 1 ? this.slideCount++ : this.slideCount = 0;
    $('#current-image').html(this.slideCount + 1);
  }

  startSlideShow() {
    this.slides.eq(this.slideCount).fadeIn(1000).delay(1000).fadeOut(() => {
      this.slideShowCounter();
      this.startSlideShow();
    });
  }

  init() {
    this.slides.hide();
    this.startSlideShow();
    this.navigationArea()
  }
}

$(() => {
  let slides = $('#slideshow li'),
    slideShow = new SlideShow(slides);
  slideShow.init();
});
