class SlideShow {

  constructor(slides, slideCount, totalSlides) {
    this.slides = slides;
    this.slideCount = slideCount;
    this.totalSlides = totalSlides;
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
    $(`<div><span id = "current-image">1</span>
      / <span id = "total-images">${this.totalSlides}</span>
      </div>`).insertAfter('#slideshow');
  }
}

$(function() {
  let slides = $('#slideshow li'),
  slideCount = 0,
  totalSlides = slides.length;
  slideShow = new SlideShow(slides, slideCount, totalSlides);
  slideShow.init();
});
