function EngineSearch( providersRepository ) {
    var repository = providersRepository;
    var engine;
    var documents = new Array();
    var providers;
    
    this.search = function( filter ) {
        engine.search( filter );
        
    };
    
    var generateIndex = function(){
        var idx = lunr(function () {
            this.ref('id')
            this.field('tags')
            
            documents.forEach(function (doc) {
                this.add(doc)
            }, this)
        });
        
        console.log( documents );
    };
    
    var initializeEngine = function( providerList ) {
        providers = providerList;
        
        $.map( providerList, function( provider, providerID ) {
            documents.push( {id:providerID, tags:provider.tags} );
        });

        generateIndex();
    };
    
    repository.getAll( initializeEngine );
}