/// <reference path="C:\Users\MARTY\Desktop\OnlineWatchShop\OnlineWatchShop\libs/jquery-2.1.1.js" />

$.getScript('../scripts/shop.js');

function showResultsFromSearch(searchField, itemsArray, pageBody) {
    $(searchField).keyup(
    function () {
        console.log(itemsArray);
        var $searchText = $.trim($(searchField).val().toLowerCase());

        var searchItems = [];

        for (var i = 0; i < itemsArray.length; i++) {
            if (((itemsArray[i].brand).toLowerCase().indexOf($searchText) > -1) || ((itemsArray[i].title).toLowerCase().indexOf($searchText) > -1)) {
                searchItems.push(itemsArray[i]);
            };
        }
        
        addShopItemsToPage(pageBody, searchItems);

        $searchText = '';
        searchItems = [];

    });
}