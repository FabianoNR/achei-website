function ProvidersRepository() {
    var data;
    var uri = '/providers/';
    
    this.getAll = function( callback ) {
        return getDB().once('value').then(function(snapshot) {
            callback.call( data, snapshot.val() );
            console.log("consultando base de dados...");
        });
    };
    
    var getByTags = function( token, tryBuildView ) {
        return getDB( token ).once('value').then(function(snapshot) {
            callback.call( data, snapshot.val() );
            console.log("consultando base de dados...");
        }); 
    };
    
    var getDB = function( uriComplement ) {        
        uri += ( uriComplement === undefined ) ? '' : uriComplement;
        return firebase.database().ref( uri );
    };
}