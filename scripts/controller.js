$(document).ready(function(){
//alert('dom ready')

$(document).scroll(function(){
	//alert('clicked')
	document.getElementById('experiment').style.webkitPerspectiveOrigin =
	"50% "+window.pageYOffset*1.5+"px";
})



$('#idface1').toggle(function(){
	$('#section1').slideUp();
}, function(){
	$('#section1').slideDown();
});

$('#idface2').toggle(function(){
	$('#section2').slideUp();
}, function(){
	$('#section2').slideDown();
});

$('#idface3').toggle(function(){
	$('#section3').slideUp();
}, function(){
	$('#section3').slideDown();
});

$('#idface4').toggle(function(){
	$('#section4').slideUp();
}, function(){
	$('#section4').slideDown();
});

});