/// <reference path="C:\Users\MARTY\Desktop\OnlineWatchShop\OnlineWatchShop\libs/jquery-2.1.1.js" />

$.getScript('../scripts/shop.js');

function showResultsFromSearch(searchField, itemsArray, pageBody, filterBody) {
    $(searchField).keyup(
    function () {
        var $allCheckboxes = $(filterBody).find('input:checkbox');
        for (var cb = 0; cb < $allCheckboxes.length; cb++) {
            $allCheckboxes[cb].checked = false;
        }

        var $allTextfields = $(filterBody).find('input:text');
        for (var t = 0; t < $allTextfields.length; t++) {
            $allTextfields[t].value = '';
        }

        var $all

        var $searchText = $.trim($(searchField).val().toLowerCase());

        var searchItems = [];

        for (var i = 0; i < itemsArray.length; i++) {

            var $itemBrand = (itemsArray[i].brand).toLowerCase();
            var $itemTitle = (itemsArray[i].title).toLowerCase();

            if (($itemBrand.indexOf($searchText) > -1) || ($itemTitle.indexOf($searchText) > -1)) {
                searchItems.push(itemsArray[i]);
            };
        }
        
        addShopItemsToPage(pageBody, searchItems);

        $searchText = '';
        searchItems = [];

    });
}