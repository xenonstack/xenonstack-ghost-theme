// on scroll right sidebar fix
$(function(){ // document ready
  if (!!$('#R_blog_sidebar').offset()) { // make sure ".sticky" element exists
	var stickyTop = $('#R_blog_sidebar').offset().top; // returns number 
	$(window).scroll(function(){ // scroll event
	  var windowTop = $(window).scrollTop(); // returns number 
	  if (stickyTop < windowTop){
		$('#R_blog_sidebar').css({ position: 'fixed', top: 0,});
	  }
	  else {
		$('#R_blog_sidebar').css('position','static');
	  }
	});
  }
});
$(function() {
    var top = $('#R_blog_sidebar').offset().top - parseFloat($('#R_blog_sidebar').css('marginTop').replace(/auto/, 0));
    var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));

    var maxY = footTop - $('#R_blog_sidebar').outerHeight();

    $(window).scroll(function(evt) {
        var y = $(this).scrollTop();
        if (y > top) {
            if (y < maxY) {
                $('#R_blog_sidebar').addClass('fixed').removeAttr('style');
            } else {
                $('#R_blog_sidebar').removeClass('fixed').css({
                    position: 'absolute',
                    top: (maxY - top) + 'px'
                });
            }
        } else {
            $('#R_blog_sidebar').removeClass('fixed');
        }
    });
});