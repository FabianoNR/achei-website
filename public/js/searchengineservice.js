function SearchEngineService( data ) {
    var engine;
    var documents = new Array();
    var providers = new Array();
	
    this.searchProviders = function( filter ) {
        var matches = engine.search( filter );
        var results = new Array();
        $.map( matches, function( match, index ) {
            results[match.ref] = providers[match.ref];
        });
        
        return results;
    };
	
	this.getProvider = function( providerID ) {
		return providers[providerID];
	};
    
    var generateIndex = function(){
        engine = lunr(function () {
            this.ref('id')
            this.field('tags')
            
            documents.forEach(function (doc) {
                this.add(doc)
            }, this)
        })
    };
    
    var initializeEngine = function( data ) {        
        
        $.map( data, function( provider, providerID ) {
            documents.push( {id:providerID, tags:provider.tags} );
            providers[providerID] = provider;
        });

        generateIndex();
    };
	
	initializeEngine( data );
}