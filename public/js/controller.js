var builder;
var service;
var ID_INPUT_SEARCH = '#index-search-filter';
var ID_RESULT_VIEW = '#Result-view';
var ID_PROVIDER_LIST_VIEW = '#Provider-list-view';
var TOKEN_SEARCH = '#buscar';
var TOKEN_PROFILE = '#perfil';

$(document).ready(function(){
    
    $('.carousel').carousel({
  		interval: 7000
	});  

    $('.carousel2').carousel();  

    $('.hamburger').click(function(){
        $(".menu-container-list").toggleClass("menu-down");
    });
    
	new TemplateLoader().load( function( templates ) {
		builder = new ComponentViewBuilder( templates );
		initialize();
	});
	
	new ProvidersRepository().getAll( function( data ) {
		service = new SearchEngineService( data );
		initialize();
	});
	
});

$(window).on('hashchange', function(){
	render(decodeURI(window.location.hash));
});

function initialize() {
	if( builder && service )
		$(window).trigger('hashchange');
};

function render(url) {
	var temp = url.split('=')[0];

	var map = {

		'': function() {
			var view = builder.buildPresenterView();
			setView( view );
		},

		'#perfil': function() {
			var id = url.split(TOKEN_PROFILE + '=')[1].trim();
			var provider = service.getProvider( id );
			var view = builder.buildProfileView( provider );
			setView( view );
			
		},

		'#buscar': function() {
			var filter = url.split(TOKEN_SEARCH + '=')[1].trim();
			setResultViewIfNecessary( filter );
			listProviders( filter );
		}
	};
	
	if(map[temp]) {
		map[temp]();
	}
};

function setView( view ) {
	$('#App').html( view );
};

function listProviders( filter ) {
	var providers = service.searchProviders( filter );
	var listView = builder.buildProviderListView( providers );
	$(ID_PROVIDER_LIST_VIEW).html( listView );
};

function searchProviders() {
	var userInput = $(ID_INPUT_SEARCH).val();  
	window.location.hash = TOKEN_SEARCH + '=' + userInput;
};

function setResultViewIfNecessary( filter ) {
	if ( $(ID_RESULT_VIEW).length === 0 ){
		var view = builder.buildResultView();
		setView( view );
	}
	
	$(ID_INPUT_SEARCH).val( filter );
};

function knowMoreProfile( providerID ) {
	window.location.hash = TOKEN_PROFILE + '=' + providerID;
};
