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
    
    engineSearchService = new EngineSearchService();
    
});

function setView( view ) {
    $( "#App" ).html( view );
}

function searchProvidersChangPage() {
     //$("#index-search").attr("action", "resultados.html").submit();
    var filter = $("#index-search-filter").val();
    var results = engineSearchService.search( filter );
    console.log( results );
}

/*
    var database = firebase.database();
    
    return firebase.database().ref('/categories/car').once('value').then(function(snapshot) {
      var carName = snapshot.val().name;
      console.log(carName);
    });

*/