/// <reference path="../libs/jquery-2.1.1.js" />
var mensWatches = [
    {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph.jpg',
        brand: 'Accurist',
        title: 'Men\'s chronograph',
        price: '230.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph.jpg',
        brand: 'Accurist',
        title: 'Men\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph2.jpg',
        brand: 'Accurist',
        title: 'Men\'s chronograph',
        price: '430.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph.jpg',
        brand: 'Accurist',
        title: 'Men\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph2.jpg',
        brand: 'Accurist',
        title: 'Men\'s chronograph',
        price: '430.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph3.jpg',
        brand: 'Accurist',
        title: 'Men\'s chronograph',
        price: '250.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago-42.jpg',
        brand: 'Adidas',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago.jpg',
        brand: 'Adidas',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph3.jpg',
        brand: 'Armani Exchange',
        title: 'Men\'s chronograph',
        price: '250.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago-42.jpg',
        brand: 'Armani Exchange',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph2.jpg',
        brand: 'Armani Exchange',
        title: 'Men\'s chronograph',
        price: '430.00 лв.',
        category: 'Luxury'
    },
    {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph3.jpg',
        brand: 'Armani Exchange',
        title: 'Men\'s chronograph',
        price: '250.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago-42.jpg',
        brand: 'Armani Exchange',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago.jpg',
        brand: 'Armani Exchange',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph.jpg',
        brand: 'Ben Sherman',
        title: 'Men\'s chronograph',
        price: '230.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago.jpg',
        brand: 'Ben Sherman',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago.jpg',
        brand: 'Ben Sherman',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph.jpg',
        brand: 'Ben Sherman',
        title: 'Men\'s chronograph',
        price: '230.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph.jpg',
        brand: 'Ben Sherman',
        title: 'Men\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph.jpg',
        brand: 'Black Dice',
        title: 'Men\'s chronograph',
        price: '230.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph.jpg',
        brand: 'Breo',
        title: 'Men\'s chronograph',
        price: '230.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph.jpg',
        brand: 'Breo',
        title: 'Men\'s chronograph',
        price: '140.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph2.jpg',
        brand: 'Breo',
        title: 'Men\'s chronograph',
        price: '430.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph.jpg',
        brand: 'Breo',
        title: 'Men\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph2.jpg',
        brand: 'Breo',
        title: 'Men\'s chronograph',
        price: '430.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph3.jpg',
        brand: 'Breo',
        title: 'Men\'s chronograph',
        price: '250.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago-42.jpg',
        brand: 'Breo',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago-42.jpg',
        brand: 'Breo',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago.jpg',
        brand: 'Breo',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago.jpg',
        brand: 'Calvin Klein',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph.jpg',
        brand: 'Calvin Klein',
        title: 'Men\'s chronograph',
        price: '230.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph.jpg',
        brand: 'Calvin Klein',
        title: 'Men\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph2.jpg',
        brand: 'Calvin Klein',
        title: 'Men\'s chronograph',
        price: '430.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph3.jpg',
        brand: 'Calvin Klein',
        title: 'Men\'s chronograph',
        price: '250.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago-42.jpg',
        brand: 'Calvin Klein',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago.jpg',
        brand: 'Character',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph.jpg',
        brand: 'Citizen Drive',
        title: 'Men\'s chronograph',
        price: '230.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph.jpg',
        brand: 'Citizen Drive',
        title: 'Men\'s chronograph',
        price: '140.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph2.jpg',
        brand: 'Daniel Wellington',
        title: 'Men\'s chronograph',
        price: '430.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago.jpg',
        brand: 'Diesel',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph.jpg',
        brand: 'Diesel',
        title: 'Men\'s chronograph',
        price: '230.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph.jpg',
        brand: 'Diesel',
        title: 'Men\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph3.jpg',
        brand: 'Diesel',
        title: 'Men\'s chronograph',
        price: '250.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago-42.jpg',
        brand: 'Diesel',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago.jpg',
        brand: 'Diesel',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph.jpg',
        brand: 'Diesel',
        title: 'Men\'s chronograph',
        price: '230.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph.jpg',
        brand: 'Diesel',
        title: 'Men\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph2.jpg',
        brand: 'DKNY',
        title: 'Men\'s chronograph',
        price: '430.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph3.jpg',
        brand: 'Emporio Armani',
        title: 'Men\'s chronograph',
        price: '250.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago-42.jpg',
        brand: 'Emporio Armani',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago.jpg',
        brand: 'Emporio Armani',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph.jpg',
        brand: 'Emporio Armani',
        title: 'Men\'s chronograph',
        price: '230.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph.jpg',
        brand: 'Emporio Armani',
        title: 'Men\'s chronograph',
        price: '140.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph2.jpg',
        brand: 'Emporio Armani',
        title: 'Men\'s chronograph',
        price: '430.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph3.jpg',
        brand: 'Firetrap',
        title: 'Men\'s chronograph',
        price: '250.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago-42.jpg',
        brand: 'Firetrap',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago.jpg',
        brand: 'Firetrap',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph.jpg',
        brand: 'Fossil',
        title: 'Men\'s chronograph',
        price: '230.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph.jpg',
        brand: 'Fossil',
        title: 'Men\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph2.jpg',
        brand: 'Fossil',
        title: 'Men\'s chronograph',
        price: '430.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph3.jpg',
        brand: 'Fossil',
        title: 'Men\'s chronograph',
        price: '250.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago-42.jpg',
        brand: 'Fossil',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph3.jpg',
        brand: 'Fossil',
        title: 'Men\'s chronograph',
        price: '250.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago-42.jpg',
        brand: 'Fossil',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago.jpg',
        brand: 'Fossil',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph3.jpg',
        brand: 'KENZO',
        title: 'Men\'s chronograph',
        price: '250.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago-42.jpg',
        brand: 'KENZO',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago.jpg',
        brand: 'KENZO',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph.jpg',
        brand: 'KENZO',
        title: 'Men\'s chronograph',
        price: '230.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph.jpg',
        brand: 'KENZO',
        title: 'Men\'s chronograph',
        price: '140.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph2.jpg',
        brand: 'KENZO',
        title: 'Men\'s chronograph',
        price: '430.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph.jpg',
        brand: 'Michael Kors',
        title: 'Men\'s chronograph',
        price: '230.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph.jpg',
        brand: 'Michael Kors',
        title: 'Men\'s chronograph',
        price: '140.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph2.jpg',
        brand: 'Michael Kors',
        title: 'Men\'s chronograph',
        price: '430.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago.jpg',
        brand: 'Michael Kors',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph.jpg',
        brand: 'Michael Kors',
        title: 'Men\'s chronograph',
        price: '230.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph.jpg',
        brand: 'Michael Kors',
        title: 'Men\'s chronograph',
        price: '140.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph2.jpg',
        brand: 'Michael Kors',
        title: 'Men\'s chronograph',
        price: '430.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph3.jpg',
        brand: 'Michael Kors',
        title: 'Men\'s chronograph',
        price: '250.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph3.jpg',
        brand: 'Vivienne Westwood',
        title: 'Men\'s chronograph',
        price: '250.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago-42.jpg',
        brand: 'Vivienne Westwood',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph2.jpg',
        brand: 'Vivienne Westwood',
        title: 'Men\'s chronograph',
        price: '430.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph3.jpg',
        brand: 'Vivienne Westwood',
        title: 'Men\'s chronograph',
        price: '250.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago-42.jpg',
        brand: 'Vivienne Westwood',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Luxury'
    }];

$.getScript('../scripts/shop.js', function () {
    addShopItemsToPage('#mens-shop-body', mensWatches);
});