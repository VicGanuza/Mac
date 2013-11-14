//http Request
$("#button_get").click(function(){
	var texto = $("#name_get").val();

	$.get('php/reverse.php', { input: texto }, function(data) {
		$("#feedback_get").text(data);

	});
});

//GET Post Request
$("#button_post").click(function(){
	var texto = $("#name_post").val();

	$.post('php/reverse.php', { input: texto }, function(data) {
		$("#feedback_post").text(data);

	});
});

//Ajax
$("#button").click(function(){
	$.ajax({
		url: "php/reverse.php",
		success: function(data) {
			$("#content_ajax").html(data);
		}
	});
});

//Ajax Send
$("#button_send").click(function(){
	var name = $("#name").val();
	$.ajax({
		url: "php/page.php",
		data: 'name=' + name,
		success: function(data) {
			$("#content_send").html(data);
		}
	});
});

//JQuery UI draggable

$(document).ready(function(){
	$("#drag").draggable({containment: 'parent'});
});

//JQuery Accordion

$("#content").accordion({ event: 'mouseover' });

//JQuery Datepicker
$("#date").datepicker();