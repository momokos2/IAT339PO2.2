//promotion input field
$(document).ready(function() {
    $('.expand').click(function(e) {
        e.preventDefault();
        $('.promotion-section').slideUp('normal');
        if ($(this).next().is(':hidden') === true) {
            $(this).addClass('on');
            $(this).next().slideDown('normal');
        }
    });
    $('.promotion-section').hide();
});


//photo gallary
$(function() {
  
  var photoGallery = function($photoGalleryElement) {
    var $photoGallery = $photoGalleryElement,
        $photoLinks = $photoGallery.find('a[href*="#photo"]'),
        $photos = $photoGallery.find('img[id*="photo"]'),
        activeClass = 'active';
    
    function init() {
      $photoGallery.addClass('enabled');
         
      $photoGallery.on({
        click: function(e) {
          e.preventDefault();
          var $photoTarget = $(this).attr('href');
          $photos.removeClass(activeClass);
          $photoGallery.find($photoTarget).addClass(activeClass);
        }
      }, 'a[href*="#photo"]')
    }
    
    init();
  }
  
  $.each($('.photo-gallery'), function() {
    var gallery = new photoGallery( $(this) );
  });
  
});


//side menu
$(document).ready(function(){

  (function($) {

    $('#header-icon').click(function(e){
      e.preventDefault();
      $('body').toggleClass('with--sidebar');
    });
    
    $('#site-cache').click(function(e){
      $('body').removeClass('with--sidebar');
    });

  })(jQuery);

});






