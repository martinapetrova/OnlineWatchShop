/// <reference path="../libs/jquery-2.1.1.js" />

$.getScript('../scripts/filters.js');

$.getScript('../scripts/mens-watches.js');

addBrandsToPage(mensWatches, '#mens-brands-selection');

addCategoriesToPage(mensWatches, '#mens-category-selection');