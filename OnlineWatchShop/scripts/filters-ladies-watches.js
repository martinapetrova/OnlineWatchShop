/// <reference path="../libs/jquery-2.1.1.js" />

$.getScript('../scripts/filters.js');

$.getScript('../scripts/ladies-watches.js');

addBrandsToPage(ladiesWatches, '#ladies-brands-selection');

addCategoriesToPage(ladiesWatches, '#ladies-category-selection');