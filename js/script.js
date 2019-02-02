$(function(){
	
	function Avatar(){
		
		var body = $('.leftSide__setings__body__select li');
		var avatarBody = $('.rightSide__content__avatar__body img')
		var face = $('.leftSide__setings__face__select__color')
		var faceActive = $('.leftSide__setings__face__select__color li')
		var range = $('.leftSide__grade__slide input[type="range"]')
		var rangeVal = $('.leftSide__grade__slide input[type="range"]').val();
		var $val = $("input[type='range']").val();
		var gradeName = $('.rightSide__content__gradeName li')
			

			range.on("change", function() {
  			if (+$(this).val() > $val) {
   				 gradeName.each(function() {
    		var oldSize = $(this).css("font-size");
    		var newSize = parseInt(oldSize) - 4 + "px";
    		$(this).css("font-size", newSize);
    		

		})
  			} else {
    				gradeName.each(function() {
    		var oldSize = $(this).css("font-size");
    		var newSize = parseInt(oldSize) + 3 + "px";
    		$(this).css("font-size", newSize);

		})
  					}
  			$val = $(this).val();

  			if($(this).val() == 0){
  				$('.rightSide__content__gradeName .middle').css('display', 'none');
  				$('.rightSide__content__gradeName .senior').css('display', 'none');
  			}

  			if($(this).val() == 1){
  				$('.rightSide__content__gradeName .middle').css('display', 'block');
  				$('.rightSide__content__gradeName .senior').css('display', 'none');
  			}

  			if($(this).val() == 2){
  				$('.rightSide__content__gradeName .middle').css('display', 'block');
  				$('.rightSide__content__gradeName .senior').css('display', 'block');
  			}
		});

			

			gradeName.each(function() {
    		var oldSize = $(this).css("font-size");
    		var newSize = parseInt(oldSize) - 3 + "px";
    		$(this).css("font-size", newSize);

		})
		
			
		
		body.on('click', function(){
			body.not(this).removeClass('active');
			$(this).addClass('active');
			faceActive.removeClass('active');

    

			
			for(var i = 0; i <= 2; i++)
				if( $(this).attr('id') == avatarBody.eq(i).attr('id')){
					 avatarBody.eq(i).addClass('show');
				}
			else{
						avatarBody.eq(i).removeClass('show');
				}

			for(var i = 0; i <= 2; i++)
				if( $(this).attr('id') == face.eq(i).attr('id')){
					 face.eq(i).addClass('show');
					 face.eq(i).children().first().addClass('active')
}
			else{
						face.eq(i).removeClass('show');
				}

		if(body.hasClass('active')){
			$('.rightSide__content__avatar__body').children('img').remove();
			$('.leftSide__setings__body__select .active img').clone().appendTo('.rightSide__content__avatar__body')
		}

		if(face.children().hasClass('active')){
			$('.rightSide__content__avatar__face').children('img').remove();
			$('.leftSide__setings__face__select__color .active img').clone().appendTo('.rightSide__content__avatar__face')
		}
			})

		faceActive.on('click', function(){
			faceActive.not(this).removeClass('active');
			$(this).addClass('active');
			if(face.children().hasClass('active')){
				$('.rightSide__content__avatar__face').children('img').remove();
			$('.leftSide__setings__face__select__color .active img').clone().appendTo('.rightSide__content__avatar__face')
		}
		})
	}

	var avatar = new Avatar();

})