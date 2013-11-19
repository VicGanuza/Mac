define([
'jquery',
'jquery_ui'
], function ($){
	$(document).ready(function() {
		//$('.menu').tabs();
		$('.date').datepicker({dateFormat: 'dd/mm/yy', minDate: 0, showAnim: 'show'});
	});
});


