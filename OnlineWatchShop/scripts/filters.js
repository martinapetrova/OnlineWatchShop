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
        var $brandCheckbox = document.createElement('input');
        $brandCheckbox.id = pageBody + '-' + brands[brand];
        $brandCheckbox.setAttribute('type', 'checkbox');
        $brandSelection.append($brandCheckbox);
        if (brand%2==0) {
            $brandCheckbox.setAttribute('checked', 'checked');
        }
        var $brandLabel = document.createElement('label');
        $brandLabel.innerHTML = brands[brand].toString();
        $brandLabel.setAttribute('for', $brandCheckbox.id);
        $brandSelection.append($brandLabel);

        var $newLine = document.createElement('br');
        $brandSelection.append($newLine);
    }
}

function addCategoriesToPage(itemsArray, pageBody) {
    var categories = [];

    for (var item in itemsArray) {
        if ($.inArray(itemsArray[item].category, categories) < 0) {
            categories.push(itemsArray[item].category);
        }
    }

    for (var category in categories) {
        var $categorySelection = $(pageBody);

        var $categoryOption = document.createElement('a');
        $categoryOption.innerHTML = categories[category].toString();
        $categorySelection.append($categoryOption);

        var $newLine = document.createElement('br');
        $categorySelection.append($newLine);
    }
}

function getItemsWithSelectedBrands(pageBody) {
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

    for (var watch = 0; watch < ladiesWatches.length; watch++) {
        var watchBrand = ladiesWatches[watch].brand;
        if ($selectedBrands.indexOf(watchBrand) > -1) {
            $selectedWatches.push(ladiesWatches[watch]);
        }
    }

    return $selectedWatches;
}

