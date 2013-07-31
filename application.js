$(document).ready(function(){
	$('#style_editor').submit(function(e){

		e.preventDefault();
		
		var selector = $('#selector').val();
		var property = $('#property').val();
		var value = $('#value').val();

		updateCSS(selector,property,value);

	});
});

function updateCSS(selector,property,value) {
	console.log($(selector));
	$(selector).css(property, value);
}