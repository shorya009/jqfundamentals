class LoadExternalContent {
  constructor($h3) {
    this.$h3 = $h3;
  }

  loadContent(e) {
    e.preventDefault();
    let divId = $(this).data('key');
    $(`#${divId}`).load(`data/blog.html #${divId}`);
  }

  bindEvent() {
    this.$h3.bind("click", this.loadContent);
  }

  createTargetDiv() {
    this.$h3.each(function(index, elements) {
      let h3 = $(elements);
      $(`<div id= "post${index+1}"></div>`).appendTo(h3);
      $(this).data(`key`, `post${index+1}`);
    });
    this.bindEvent();
  }

}

$(function() {
  let $h3 = $('.module').find('[data-name = "heading"]'),
  loadExternalContent = new LoadExternalContent($h3);
  loadExternalContent.createTargetDiv();
});
