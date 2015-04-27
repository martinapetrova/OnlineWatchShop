/// <reference path="../libs/jquery-2.1.1.js" />

$.getScript('../scripts/shop.js');

$.getScript('../scripts/filters.js');

$.getScript('../scripts/ladies-watches.js');

addBrandsToPage(ladiesWatches, '#ladies-brands-selection');

addCategoriesToPage(ladiesWatches, '#ladies-category-selection');



var goBtn = document.getElementById('ladies-go-btn');
var selectedWatches = getItemsWithSelectedBrands('#ladies-brands-selection');
goBtn.addEventListener('click', function(){addShopItemsToPage('#ladies-shop-body', selectedWatches)}, false);
