
function ComponentViewBuilder( mapOfTemplates ) {
	var templates = mapOfTemplates;
	
	this.buildPresenterView = function(){
		var a = templates['index-search'];
		var b = templates['index-footer'];
		return a + b;
	};
	
	this.buildProfileView = function( provider ) {
		var skills = "";
		$.map( provider.skills, function( skill, id ){
			skills += '<li class="profile-container-characteristics-item">'+skill+'</li>';
		});
		
		var html = templates['profile'];
		html = html.replace( "data-provider-nickname", provider.nickname );
		html = html.replace( "data-provider-profission", provider.profission );
		html = html.replace( "data-provider-description", provider.description );
        html = html.replace( "data-provider-location", provider.location );
		html = html.replace( "data-provider-whatsapp", provider.whatsapp );
		html = html.replace( "data-provider-email", provider.email );
        html = html.replace( "data-provider-price", provider.lower_supply.price );
		html = html.replace( "data-provider-lower-supply-service", provider.lower_supply.service );
		html = html.replace( "data-provider-skills", skills );
		html = html.replace( "data-provider-nickname2", provider.nickname );
		
        return html;   
	};
	
	this.buildResultView = function() {
		return templates['results'];
	};
	
	this.buildProviderListView = function( providers ) {
		var providerItemList = "";

        for( var id in providers )      
            providerItemList += buildProviderItem( id, providers[id] );
        
		return '<ul class="result-search-list">' + providerItemList + '</ul>';
	};
	
	var buildProviderItem = function( id, provider ) {
		var amountComments = Object.keys(provider.comments).length;
		var html = templates['result-search-item'];
		
		html = html.replace( "data-provider-ID", id );
        html = html.replace( "data-provider-name", provider.nickname );
        html = html.replace( "data-provider-profission", provider.profission );
        html = html.replace( "data-provider-description", provider.description );
        html = html.replace( "data-provider-price", provider.lower_supply.price );
        html = html.replace( "data-provider-amount-comments", amountComments );
        
		return html;
	};
};