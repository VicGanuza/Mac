$(document).ready(function(){

	//Contains Selector
	$("#names_search").keyup(function() {
		
		search_name = $(this).val();

		$("#names li").removeClass("colorear");
		if ($.trim(search_name) != "") {
			$( "#names li:contains('" + search_name + "')" ).addClass('colorear');
		}

	});

	//Combine Selector
	$('#combine').click(function(){

		var combined_text = '';

		$("input[type='text']").each(function(){

			combined_text += $(this).val() + ' ';
		});

		$("#combined").text(combined_text);
	});

	//next nextAll prev prevAll
	$("#names").find("li").first().append(' (First)');
	$("#names").find("li").first().click(function(){
		$(this).nextAll().toggle();
	}).nextAll().hide(); 

	//find
	$(document).find('strong').addClass('big');

	//has
	$('ul').each(function(){
		this_sel = $(this);

		if (this_sel.has("li").length == 0) {
			this_sel.after("Empty Menu");
		}
	});

	//html
	$("#empty_copy").click(function(){
		var copy = $("#text").html();
		$("#empty").html(copy);
	});

	//attr
	var attribute = $("#example").attr("href");
	$("#attibute").text(attribute);

	//toggleClass
	$( "p" ).click(function() {
  		$( this ).toggleClass( "highlight" );
	});

	//chancge Select

	$("#list").change(function(){
		var list_value = $("#list").val();
		$("#list_feedback").html('You have selected ' + list_value)
	});

	//toggle 
	$("#click_me").toggle(function(){
		$("#click_event").html("Yes");
	},function(){
		$("#click_event").html("No");
	});

});
