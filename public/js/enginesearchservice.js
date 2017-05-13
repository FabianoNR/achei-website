function EngineSearchService( callback ) {
    var callback = callback;
    var repository = new ProvidersRepository();
    
    this.search = function( filter ) {
        if( isValid( filter ) ){
            var token = filter.toLowerCase();
            return repository.getByTags( token, tryBuildView );
        }
    };
    
    var tryBuildView = function( data ) {
      console.log( data );  
    };
    
    var isValid = function( filter ) {
      return filter !== undefined && filter !== "";  
    };
    
}