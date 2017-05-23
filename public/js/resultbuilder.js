function ResultBuilder( shape ) {
    var resultSearchListItemHTML = shape;
    
    var buildItem = function( providerID, provider ) {
        var html = resultSearchListItemHTML.replace( "data-provider-ID", providerID );
        html = html.replace( "data-provider-name", provider.nickname );
        html = html.replace( "data-provider-profission", provider.profission );
        html = html.replace( "data-provider-description", provider.description );
        html = html.replace( "data-provider-price", provider.lower_supply.price );
        html = html.replace( "data-provider-amount-comments", Object.keys(provider.comments).length );
        return html;
    };
    
    this.build = function( data ) {
        var providerItemList = "";

        for( var providerID in data )      
            providerItemList += buildItem( providerID, data[providerID] );
        
     return providerItemList;   
    };
};
