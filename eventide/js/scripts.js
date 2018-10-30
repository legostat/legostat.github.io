let wow = new WOW({
	offset: 100
});
wow.init();

var map;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 51.505, lng: 0},
  zoom: 10  
});
}


$(document).ready(function () {
	$('.collapse').on('show.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass('fa-plus-circle').addClass('fa-minus-circle');
	});
	$('.collapse').on('hide.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass('fa-minus-circle').addClass('fa-plus-circle');
	});
	$('#my-form').validator({
		feedback: {
		  success: 'fa fa-check-circle',
		  error: 'fa fa-times-circle'
		}
	});
	$('.form-select').select2({
		minimumResultsForSearch: Infinity,
		placeholder: 'Select Plan'
	});
});