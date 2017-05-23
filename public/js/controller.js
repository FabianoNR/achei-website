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
    
    resultService = new ResultService( setView, "#index-search-filter" );
    
});

function setView( view ) {
    $( "#App" ).html( view );
};

function searchProvidersFromIndexView() {
    resultService.loadView();
};

function searchProvidersFromResultsView() {
    resultService.loadJustListView();
};

function knowMoreProfile( anchor ) {
    //$("span").closest("ul");
    console.log(anchor);
};

//$("#index-search").attr("action", "resultados.html").submit();
