var sections = document.querySelectorAll('section');
for (var i = 0; i < sections.length; i++) {
  var section = sections[i];
  var id = section.id;
  var h1 = section.querySelector('h1');
  var text = h1.innerHTML;
  h1.innerHTML = "<span>" + text + "</span>" + "<a href='#" + id + "'>#" + id + "</a>";
}


$(function() {

  $('.dropdown nav').css('max-height', '999px').hide();

  $('.dropdown').on('click', function () {
    $(this).find('nav').toggle();
  });

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 1) {
      $('h2').removeClass('off-to-left').addClass('bounceInLeft');
    }
  });

  new WOW().init();

});
