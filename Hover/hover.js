
$(document).ready(function() {
	$('img').click(function() {
		console.log('data-alt-src value is', $(this).attr('data-alt-src'));
	});
	var sourceSwap = function () {
    	var $this = $(this);
    	var newSource = $this.data('alt-src');
    	$this.data('alt-src', $this.attr('src'));
    	$this.attr('src', newSource);
	}
			
	$(function() {
    	$('img[data-alt-src]').each(function() { 
        new Image().src = $(this).data('alt-src'); 
    	}).hover(sourceSwap, sourceSwap); 
	});
});
