function addShopItemsToPage(pageBody, itemsArray) {
    var $shop = $(pageBody);
    var $shopTable = document.createElement('table');

    for (var i = 0; i < itemsArray.length; i++) {
        if (i % 5 == 0) {
            var $tr = document.createElement('tr');
        }

        var $td = document.createElement('td');
        $td.className = 'simpleCart_shelfItem';

        var $image = document.createElement('img');
        $image.className = 'item_thumb';
        $image.src = itemsArray[i].imageSource;
        $td.appendChild($image);

        var $brand = document.createElement('p');
        $brand.className = 'item_brand';
        $brand.textContent =itemsArray[i].brand;
        $td.appendChild($brand);

        var $title = document.createElement('p');
        $title.className = 'item_name';
        $title.textContent = itemsArray[i].title;
        $td.appendChild($title);

        var $price = document.createElement('p');
        $price.className = 'item_price';
        $price.textContent = itemsArray[i].price;
        $td.appendChild($price);

        var $addToCart = document.createElement('a');
        $addToCart.className = 'item_add';
        $addToCart.href = 'javascript:;'
        $addToCart.textContent = 'ADD TO CART';
        $td.appendChild($addToCart);

        $tr.appendChild($td);

        if (i % 4 == 0) {
            $shopTable.appendChild($tr);
        }
    }

    $shop.append($shopTable);
};