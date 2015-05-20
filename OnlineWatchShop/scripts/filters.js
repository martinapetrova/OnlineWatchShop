/// <reference path="../libs/jquery-2.1.1.js" />

$.getScript('../scripts/ladies-watches.js');

function addBrandsToPage(itemsArray, pageBody) {
    var brands = [];

    for (var item in itemsArray) {
        if ($.inArray(itemsArray[item].brand, brands) < 0) {
            brands.push(itemsArray[item].brand);
        }
    }

    for (var brand in brands) {
        var $brandSelection = $(pageBody);
        var $brandSelectionDiv = document.createElement('div');
        $brandSelectionDiv.className = 'black-checkbox';
        var $brandCheckbox = document.createElement('input');
        $brandCheckbox.id = pageBody + '-' + brands[brand];
        $brandCheckbox.setAttribute('type', 'checkbox');
        $brandSelectionDiv.appendChild($brandCheckbox);
        var $brandLabel = document.createElement('label');
        $brandLabel.innerHTML = brands[brand].toString();
        $brandLabel.setAttribute('for', $brandCheckbox.id);
        $brandSelectionDiv.appendChild($brandLabel)
        var $newLine = document.createElement('br');
        $brandSelectionDiv.appendChild($newLine);
        $brandSelection.append($brandSelectionDiv);
    }
}

//function addCategoriesToPage(itemsArray, pageBody) {
//    var categories = [];

//    for (var item in itemsArray) {
//        if ($.inArray(itemsArray[item].category, categories) < 0) {
//            categories.push(itemsArray[item].category);
//        }
//    }

//    for (var category in categories) {
//        var $categorySelection = $(pageBody);

//        var $categoryOption = document.createElement('a');
//        $categoryOption.innerHTML = categories[category].toString();
//        $categorySelection.append($categoryOption);

//        var $newLine = document.createElement('br');
//        $categorySelection.append($newLine);
//    }
//}

function getItemsWithSelectedBrands(pageBody, itemArray) {
    var $allLabels = $(pageBody).find('label');
    var $allBrands = [];

    for (var label = 0; label < $allLabels.length; label++) {
        $allBrands.push($allLabels[label].innerHTML);
    }

    var $selectedBrands = [];

    for (var brand in $allBrands) {
        var $checkBox = document.getElementById(pageBody + '-' + $allBrands[brand]);
        if ($checkBox.checked) {
            $selectedBrands.push($allBrands[brand]);
        }
    }

    var $selectedWatches = [];

    for (var item = 0; item < itemArray.length; item++) {
        var watchBrand = itemArray[item].brand;
        if ($selectedBrands.indexOf(watchBrand) > -1) {
            $selectedWatches.push(itemArray[item]);
        }
    }

    if ($selectedWatches.length == 0) {
        for (var item = 0; item < itemArray.length; item++) {
            $selectedWatches.push(itemArray[item]);
        }
    }

    return $selectedWatches;
}

function getItemsWithSelectedPrice(minPriceSelector, maxPriceSelector, itemsArray) {
    var $minPrice = parseFloat($(minPriceSelector).val());
    var $maxPrice = parseFloat($(maxPriceSelector).val());
    var $selectedWatches = [];

    for (var item = 0; item < itemsArray.length; item++) {
        if (parseFloat(itemsArray[item].price) >= $minPrice && parseFloat(itemsArray[item].price) <= $maxPrice) {
            $selectedWatches.push(itemsArray[item]);
        }
    }

    if ($selectedWatches.length == 0) {
        for (var item = 0; item < itemsArray.length; item++) {
            $selectedWatches.push(itemsArray[item]);
        }
    }

    return $selectedWatches;
}

function getSelectedItems(selectedBrands, selectedPriceRange) {
    var selectedItems = selectedBrands.filter(function (n) {
        return selectedPriceRange.indexOf(n) != -1
    });
    return selectedItems;
}
