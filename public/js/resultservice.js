function ResultService( callback, idOfSearchInput ) {
    var builder;
    var callback = callback;
    var searchInputID = idOfSearchInput;
    var searchEngine = new SearchEngine( new ProvidersRepository() );
    var resultsViewSample = "";
    var resultsListSample = '<ul class="result-search-list">data-provider-item</ul>';
    
    
    
    this.loadView = function() {
        var view;
        var userInput = getUserInput();
        callback.call( view, resultsViewSample );
        setUserInput( userInput );
        this.loadJustListView();
    };
    
    this.loadJustListView = function() {
        var userInput = getUserInput();
        
        if( isValid( userInput ) ){
            var filter = userInput.toLowerCase();
            var providers = searchEngine.search( filter );
            tryBuildView( providers );
        }
    };
    
    var tryBuildView = function( providers ) {
        var providerItemList = builder.build( providers );
        var resultView = resultsListSample.replace( 'data-provider-item', providerItemList );
        $("#Results-view").html( resultView );
    };
    
    var isValid = function( userInput ) {
      return userInput !== undefined && userInput !== "";  
    };
    
    var loadResultsView = function () {
        $.get( "../results.html", function( data ) {
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
    
    var setUserInput = function( userInput ) {
        return $(searchInputID).val( userInput );  
    };
    
    loadResultsView();
    loadResultSearchItemView();
};