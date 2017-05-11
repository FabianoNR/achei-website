function IndexService( callback ) {
    var callback = callback;
    var indexSearchView = "";
    var indexFooterView = "";
    
    this.loadView = function() {
        if( wasLoaded() )
            returnToController();
        else
            load();
    };
    
    var wasLoaded = function() {
        return ( indexSearchView !== "" || 
                 indexFooterView !== "" );
    };
    
    var load = function() {
        loadIndexSearch();
        loadIndexFooter();
    };
    
    var loadIndexSearch = function () {
        $.get( "../index-search.html", function( data ) {
            indexSearchView = data;
            if( indexFooterView !== "" )
                returToController();
        });
    };

    var loadIndexFooter = function() {
        $.get( "../index-footer.html", function( data ) {
            indexFooterView = data;
            if( indexSearchView !== "" ) {
                returnToController();
            }
        });
    };
    
    var returnToController = function() {
        var htmlCode = indexSearchView + indexFooterView;
        var view;
        callback.call( view, htmlCode );
    };
}