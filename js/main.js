$(document).ready(function(){
   
    $('.carousel').carousel({
  		interval: 7000
	});  

     $('.carousel2').carousel();  

     $('.hamburger').click(function(){

    	$(".menu-container-list").toggleClass("menu-down");

     });

});








