$('#dark-pagination').pagination({
    items: ladiesWatches.length,
    onPageClick: function () {
        var currentPage = $("#dark-pagination").pagination('getCurrentPage');
        var itemsOnPage = 15;
        var itemsForSelectedPage = getItemsForSelectedPage(itemsOnPage, ladiesWatches, currentPage);
        addShopItemsToPage('#ladies-shop-body', itemsForSelectedPage);
    },
    onInit: function () {
        var currentPage = $("#dark-pagination").pagination('getCurrentPage');
        var itemsOnPage = 15;
        var itemsForSelectedPage = getItemsForSelectedPage(itemsOnPage, ladiesWatches, currentPage);
        addShopItemsToPage('#ladies-shop-body', itemsForSelectedPage);
    }
});