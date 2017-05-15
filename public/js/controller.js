var indexService;
var engineSearchService;

$(document).ready(function(){
    
    $('.carousel').carousel({
  		interval: 7000
	});  

    $('.carousel2').carousel();  

    $('.hamburger').click(function(){
        $(".menu-container-list").toggleClass("menu-down");
    });
	
    indexService = new IndexService( setView );
    indexService.loadView()
    
    engineSearchService = new EngineSearchService( setView );
    
});

function setView( view ) {
    $( "#App" ).html( view );
};

function searchProvidersChangePage() {
    var userInput = $("#index-search-filter").val();
    engineSearchService.loadResultViewFrom( userInput );
};

//$("#index-search").attr("action", "resultados.html").submit();

/*
    var database = firebase.database();
    
    return firebase.database().ref('/categories/car').once('value').then(function(snapshot) {
      var carName = snapshot.val().name;
      console.log(carName);
    });

*/