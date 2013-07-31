$(document).ready(function(){

	$('#new_comment_button').click(function(){
		showCommentForm();
	});

	$('#new_comment').submit(function(e){
		e.preventDefault();
		addComment();
	});

});

function Comment(author,text) {
	this.author = author;
	this.something = text;
}

Comment.prototype.render = function() {
	return ("<li>"+ this.something +"<span class='author'>"+ this.author +"</span></li>");
}

function showCommentForm() {
	$('#new_comment_button').hide();
	$('#new_comment').show();
}

function hideCommentForm() {
	$('#new_comment_button').show();
	$('#new_comment').hide();
}

function addComment(comment) {
	var text = $('.comment_text').val();
	var author = $('.comment_author').val();
	var comment = new Comment(author,text);
	$('#comment_list').append(comment.render());
	hideCommentForm();
	clearForm($('#new_comment'));
}

function clearForm(form) {
	form.children('.field').val("");
}