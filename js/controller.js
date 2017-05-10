$(document).ready(function(){
    
    $('.carousel').carousel({
  		interval: 7000
	});  

    $('.carousel2').carousel();  

    $('.hamburger').click(function(){
        $(".menu-container-list").toggleClass("menu-down");
    });
    loadPresetationView();
});

function loadPresetationView(){
    $.get( "../index-search.html", function( data ) {
        $( ".App" ).html( data );
        alert( "Load was performed." );
    });
}

/*
    var database = firebase.database();
    
    return firebase.database().ref('/categories/car').once('value').then(function(snapshot) {
      var carName = snapshot.val().name;
      console.log(carName);
    });

*/