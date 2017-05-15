function EngineSearchService( callback ) {
    var callback = callback;
    var builder = new ResultBuilder();
    var repository = new ProvidersRepository();
    var resultsViewSample = "";
    
    
    this.loadResultViewFrom = function( userInput ) {
        if( isValid( userInput ) ){
            var tags = userInput.toLowerCase();
            //return repository.getProvidersByTags( tags, tryBuildView );
            return repository.getAll( tryBuildView );
        }
    };
    
    var tryBuildView = function( data ) {
        //resultsViewSample != "";
        var providerItemList = "";
        $.map( data, function( provider, providerID ) {
            providerItemList += builder.build( provider );
        });
        
        var resultView = resultsViewSample.replace( 'data-provider-item', providerItemList );
        
        var view;
        callback.call( view, resultView );
    };
    
    var isValid = function( filter ) {
      return filter !== undefined && filter !== "";  
    };
    
    var loadResultsView = function () {
        $.get( "../resultados.html", function( data ) {
            resultsViewSample = data;
        });
    };
    
    loadResultsView();
};