$(function(){
	//ハンバーガーメニュー
	$('#header .btn').bind('touchend click', function() {
    if($('#gNav ul').hasClass('open')){
			$('#gNav ul').slideUp(function(){
				$(this).css('display','').removeClass('open');
			});
		}else{
			$('#gNav ul').slideDown(function(){
				$(this).css('display','').addClass('open');
			});
		}		
		return false;
	});
	
	//アコーディオンメニュー
	var flg = 0;
	$('.navAccordion_sample > dd').hide();
	$('.navAccordion_sample > dt').on('click activate',function(){
		if( flg ) return false;
		flg = 1;
		$(this).toggleClass('open');
		$(this).next().slideToggle(function(){
			flg = 0;
		});
		return false;
	});

	// フォーカス時にエンターキーを押すと activate イベントが発生するようにする
	// これでTabキーによる移動とエンターキーで操作が可能になる。
	$('.navAccordion_sample > dt').on('keydown',function(event){
		var keyCode = event.keyCode || e.which;
		if (keyCode === 13){
			$(this).trigger('activate');
		}
	});
});