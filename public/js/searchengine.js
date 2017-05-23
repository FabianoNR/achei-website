function SearchEngine( providersRepository ) {
    var repository = providersRepository;
    var engine;
    var documents = new Array();
    var providers = new Array();
    
    this.search = function( filter ) {
        var matches = engine.search( filter );
        var results = new Array();
        $.map( matches, function( match, index ) {
            results[match.ref] = providers[match.ref];
        });
        
        return results;
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
    
    var initializeEngine = function( providerList ) {        
        
        $.map( providerList, function( provider, providerID ) {
            documents.push( {id:providerID, tags:provider.tags} );
            providers[providerID] = provider;
        });

        generateIndex();
    };
    //repository.getProvidersByTags( tags, tryBuildView );
    repository.getAll( initializeEngine );
}