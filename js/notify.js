// adds notification to bottom div
function notify(text){
	$('#notifications').prepend(`<div class="notification">${text}</div>`)
	let divs = $(".notification")
	setTimeout(function(){
		divs.fadeOut(300, function(){$(this).remove()})
	}, 6000)
}
