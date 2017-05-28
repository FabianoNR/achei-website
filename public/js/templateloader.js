
function TemplateLoader() {
	var loadedCount = 0;
	var callback;
	
	var mapOfTemplates = {
		'index-search' : "",
		'index-footer' : "",
		'results' : "",
		'result-search-item' : "",
		'profile' : ""
	};
	
	this.load = function( listener ) {
		callback = listener;
		
		loadTemplateFile( 'index-search', function( file ){
			mapOfTemplates['index-search'] = file;
			templateFileLoaded();
		});
		
		loadTemplateFile( 'index-footer', function( file ){
			mapOfTemplates['index-footer'] = file;
			templateFileLoaded();
		});
		
		loadTemplateFile( 'results', function( file ){
			mapOfTemplates['results'] = file;
			templateFileLoaded();
		});
		
		loadTemplateFile( 'result-search-item', function( file ){
			mapOfTemplates['result-search-item'] = file;
			templateFileLoaded();
		});
		
		loadTemplateFile( 'profile', function( file ){
			mapOfTemplates['profile'] = file;
			templateFileLoaded();
		});
	};
	
	var templateFileLoaded = function() {
		var map;
		loadedCount += 1;
		if( loadedCount === Object.keys(mapOfTemplates).length )
			callback.call( map, mapOfTemplates );
	};
	
	var loadTemplateFile = function( filename, onSuccess ) {
		var url = '../' + filename + '.html';
		$.get( url, onSuccess );
	}
};