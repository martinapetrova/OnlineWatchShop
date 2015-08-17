/// <reference path="../libs/jquery-2.1.1.js" />

$.getScript('../scripts/shop.js');

$.getScript('../scripts/filters.js');

$.getScript('../scripts/ladies-watches.js');

addBrandsToPage(ladiesWatches, '#ladies-brands-selection');

var goBtn = document.getElementById('ladies-go-btn');
goBtn.addEventListener('click',
    function () {
        var itemsWithSelectedBrands = getItemsWithSelectedBrands('#ladies-brands-selection', ladiesWatches);
        var itemsWithSelectedPriceRange = getItemsWithSelectedPrice('#ladies-min-price', '#ladies-max-price', ladiesWatches);
        selectedItems = getSelectedItems(itemsWithSelectedBrands, itemsWithSelectedPriceRange);
        addShopItemsToPage('#ladies-shop-body', selectedItems);
    }, false);
