function ResultBuilder( shape ) {
    var resultSearchListItemHTML = shape;
    
    var buildItem = function( provider ) {
        var html = resultSearchListItemHTML.replace( "data-provider-name", provider.nickname );
        html = html.replace( "data-provider-profission", provider.profission );
        html = html.replace( "data-provider-description", provider.description );
        html = html.replace( "data-provider-price", provider.lower_supply.price );
        return html;
    };
    
    this.build = function( data ) {
        var providerItemList = "";
        $.map( data, function( provider, providerID ) {
            providerItemList += buildItem( provider );
        });
        
     return providerItemList;   
    };
};
