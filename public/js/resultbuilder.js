function ResultBuilder() {
    var resultSearchListItemHTML = "<li class='result-search-list-item'><h3>data-provider-name</h3><div class='result-search-coments'><span>5 </span><i class='fa fa-comment' aria-hidden='true'></i><ul class='result-search-coments-list'><li class='result-search-coments-list-item'></li></ul></div><div class='result-search-list-item-image'><a class='result-search-list-item-link' href='perfil.html'>Saiba +</a><img class='result-search-list-item-img' src='img/guitar.jpg' alt=''/></div><div class='result-search-list-item-description'><h4 class='result-search-list-item-description-title'>data-provider-profission</h4><p class='result-search-list-item-description-details'>'data-provider-description'</p></div><p>a partir de <strong>R$ data-provider-price</strong></p><a href='#' class='result-search-list-item-description-link' data-toggle='modal' data-target='#myModal3'>Entrar em contato</a></li>";
    
    this.build = function( provider ) {
        var html = resultSearchListItemHTML.replace( "data-provider-name", provider.nickname );
        html = html.replace( "data-provider-profission", provider.profission );
        html = html.replace( "data-provider-description", provider.description );
        html = html.replace( "data-provider-price", provider.lower_supply.price );
        return html;
    };
};
