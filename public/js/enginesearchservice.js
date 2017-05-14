function EngineSearchService( callback ) {
    var callback = callback;
    var repository = new ProvidersRepository();
    
    this.search = function( filter ) {
        if( isValid( filter ) ){
            var tags = filter.toLowerCase();
            //return repository.getProvidersByTags( tags, tryBuildView );
            return repository.getAll( tryBuildView );
        }
    };
    
    var tryBuildView = function( data ) {
        var builder = new ResultBuilder();
        
        $.map( data, function( provider, providerID ) {
            console.log( builder.build( provider ) );
        });
    };
    
    var isValid = function( filter ) {
      return filter !== undefined && filter !== "";  
    };
    
};

/*
 console.log( "Index: " + providerID );
            console.log( "Nome do fornecedor: " + provider.nickname );
            console.log( "descrição: " + provider.description );
            console.log( "Preço a partir de: " + provider.lower_supply.price );
*/