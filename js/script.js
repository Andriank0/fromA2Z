$.fn.extend({animateCss:function(animationName){var animationEnd='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';this.addClass('animated '+animationName).one(animationEnd,function(){$(this).removeClass('animated '+animationName);});return this;}});$('#main-content').animateCss('bounce');$(window).scroll(function(){if($(this).scrollTop()>1){$('header').addClass("sticky");}else{$('header').removeClass("sticky");}});$('a[href^="#"]').on('click',function(event){var target=$(this.getAttribute('href'));if(target.length){event.preventDefault();$('html, body').stop().animate({scrollTop:target.offset().top},1500);}});