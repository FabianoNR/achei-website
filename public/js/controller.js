$(document).ready(function(){
    
    $('.carousel').carousel({
  		interval: 7000
	});  

    $('.carousel2').carousel();  

    $('.hamburger').click(function(){
        $(".menu-container-list").toggleClass("menu-down");
    });
	
	showInitialPage();
});

function showInitialPage() {
	$.get( "../index-search.html", function( data ) {
        $( "#App" ).html( data );
		loadIndexFooter();
    });
}

function loadIndexFooter(){
	$.get( "../index-footer.html", function( data ) {
        $( "#App" ).append( data );
    });
}

/*
    var database = firebase.database();
    
    return firebase.database().ref('/categories/car').once('value').then(function(snapshot) {
      var carName = snapshot.val().name;
      console.log(carName);
    });

*/