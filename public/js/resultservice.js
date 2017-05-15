function ResultService( callback, idOfSearchInput ) {
    var callback = callback;
    var builder = new ResultBuilder();
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
        //resultsViewSample != "";
        var providerItemList = "";
        $.map( data, function( provider, providerID ) {
            providerItemList += builder.build( provider );
        });
        
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
    
    var getUserInput = function() {
        return $(searchInputID).val();  
    };
    
    loadResultsView();
};