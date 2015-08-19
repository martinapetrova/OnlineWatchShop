$('#dark-pagination').pagination({
    items: mensWatches.length,
    onPageClick: function () {
        var currentPage = $("#dark-pagination").pagination('getCurrentPage');
        var itemsOnPage = 15;
        var itemsForSelectedPage = getItemsForSelectedPage(itemsOnPage, mensWatches, currentPage);
        addShopItemsToPage('#mens-shop-body', itemsForSelectedPage);
    },
    onInit: function () {
        var currentPage = $("#dark-pagination").pagination('getCurrentPage');
        var itemsOnPage = 15;
        var itemsForSelectedPage = getItemsForSelectedPage(itemsOnPage, mensWatches, currentPage);
        addShopItemsToPage('#mens-shop-body', itemsForSelectedPage);
    }
});