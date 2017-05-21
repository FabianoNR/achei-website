function ResultService( callback, idOfSearchInput ) {
    var callback = callback;
    var builder;
    var repository = new ProvidersRepository();
    var resultsViewSample = "";
    var searchInputID = idOfSearchInput;
    
    
    this.loadView = function() {
        var userInput = getUserInput();
        
        if( isValid( userInput ) ){
            var tags = userInput.toLowerCase();
            //return repository.getProvidersByTags( tags, tryBuildView );
            return repository.getAll( tryBuildView );
        }
    };
    
    var tryBuildView = function( data ) {
        var providerItemList = builder.build( data );
        
        var resultView = resultsViewSample.replace( 'data-provider-item', providerItemList );
        
        var view;
        callback.call( view, resultView );
    };
    
    var isValid = function( userInput ) {
      return userInput !== undefined && userInput !== "";  
    };
    
    var loadResultsView = function () {
        $.get( "../resultados.html", function( data ) {
            resultsViewSample = data;
        });
    };
    
    var loadResultSearchItemView = function () {
        $.get( "../result-search-item.html", function( data ) {
            builder = new ResultBuilder( data );
        });
    };
    
    var getUserInput = function() {
        return $(searchInputID).val();  
    };
    
    loadResultsView();
    loadResultSearchItemView();
};