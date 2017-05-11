$(document).ready(function(){
    
    $('.carousel').carousel({
  		interval: 7000
	});  

    $('.carousel2').carousel();  

    $('.hamburger').click(function(){
        $(".menu-container-list").toggleClass("menu-down");
    });
	
    new IndexService( setView ).loadView();
    
	//showInitialPage();
});

function setView( view ) {
    $( "#App" ).html( view );
}

/*
    var database = firebase.database();
    
    return firebase.database().ref('/categories/car').once('value').then(function(snapshot) {
      var carName = snapshot.val().name;
      console.log(carName);
    });

*/