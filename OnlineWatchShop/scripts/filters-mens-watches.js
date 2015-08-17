/// <reference path="../libs/jquery-2.1.1.js" />

$.getScript('../scripts/shop.js');

$.getScript('../scripts/filters.js');

$.getScript('../scripts/mens-watches.js');

addBrandsToPage(mensWatches, '#mens-brands-selection');

var goBtn = document.getElementById('mens-go-btn');
goBtn.addEventListener('click',
    function () {
        var itemsWithSelectedBrands = getItemsWithSelectedBrands('#mens-brands-selection', mensWatches);
        var itemsWithSelectedPriceRange = getItemsWithSelectedPrice('#mens-min-price', '#mens-max-price', mensWatches);
        selectedItems = getSelectedItems(itemsWithSelectedBrands, itemsWithSelectedPriceRange);
        addShopItemsToPage('#mens-shop-body', selectedItems);
    }, false);