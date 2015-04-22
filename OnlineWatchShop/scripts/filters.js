/// <reference path="../libs/jquery-2.1.1.js" />

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
        $brandCheckbox.setAttribute("type", "checkbox");
        $brandSelection.append($brandCheckbox);

        var $brandLabel = document.createElement('label');
        $brandLabel.innerHTML = brands[brand].toString();
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