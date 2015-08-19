/// <reference path="../libs/jquery-2.1.1.js" />

$.getScript('../scripts/shop.js');

var mensWatches = [
    {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph.jpg',
        brand: 'Accurist',
        title: 'Men\'s chronograph',
        price: '230.00 USD',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-london-mens-chronograph2.jpg',
        brand: 'Accurist',
        title: 'Men\'s chronograph',
        price: '140.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph.jpg',
        brand: 'Accurist',
        title: 'Men\'s chronograph',
        price: '430.00 USD',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/accurist-mens-chronograph3.jpg',
        brand: 'Accurist',
        title: 'Men\'s chronograph',
        price: '140.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago.jpg',
        brand: 'Accurist',
        title: 'Men\'s chronograph',
        price: '430.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/adidas-unisex-santiago-42.jpg',
        brand: 'Accurist',
        title: 'Men\'s chronograph',
        price: '250.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/armani-exchange-mens-banks-chronograph.jpg',
        brand: 'Adidas',
        title: 'Unisex Santiago 42',
        price: '100.00 USD',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/armani-exchange-mens-banks-chronograph2.jpg',
        brand: 'Adidas',
        title: 'Unisex Santiago',
        price: '340.00 USD',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/armani-exchange-mens-banks-chronograph3.jpg',
        brand: 'Armani Exchange',
        title: 'Men\'s chronograph',
        price: '250.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/armani-exchange-mens-banls-chronograph.jpg',
        brand: 'Armani Exchange',
        title: 'Unisex Santiago 42',
        price: '100.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/armani-exchange-mens-hampton2.jpg',
        brand: 'Armani Exchange',
        title: 'Men\'s chronograph',
        price: '430.00 USD',
        category: 'Luxury'
    },
    {
        imageSource: '../images/shop-images/mens-watches/armani-exchange-mens-hampton3.jpg',
        brand: 'Armani Exchange',
        title: 'Men\'s chronograph',
        price: '250.00 USD',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/armani-exchange-mens-tenno.jpg',
        brand: 'Armani Exchange',
        title: 'Unisex Santiago 42',
        price: '100.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/armani-exchange-mens-zulu-chronograph.jpg',
        brand: 'Armani Exchange',
        title: 'Unisex Santiago',
        price: '340.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/breo-unisex-classic.jpg',
        brand: 'Ben Sherman',
        title: 'Men\'s chronograph',
        price: '230.00 USD',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/breo-unisex-classic2.jpg',
        brand: 'Ben Sherman',
        title: 'Unisex Santiago',
        price: '340.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/bulova-mens-automatic.jpg',
        brand: 'Ben Sherman',
        title: 'Unisex Santiago',
        price: '340.00 USD',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/bulova-mens-marine-staart-duramic-blue-chronograph.jpg',
        brand: 'Ben Sherman',
        title: 'Men\'s chronograph',
        price: '230.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/bulova-mens-marine-star.jpg',
        brand: 'Ben Sherman',
        title: 'Men\'s chronograph',
        price: '140.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/bulova-mens-marine-star-chronograph.jpg',
        brand: 'Black Dice',
        title: 'Men\'s chronograph',
        price: '230.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/bulova-mens-mechanicaals-automatic.jpg',
        brand: 'Breo',
        title: 'Men\'s chronograph',
        price: '230.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/bulova-mens-mechanicals-automatic.jpg',
        brand: 'Breo',
        title: 'Men\'s chronograph',
        price: '140.00 USD',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/bulova-mens-precisionist-champlain-chronograph.jpg',
        brand: 'Breo',
        title: 'Men\'s chronograph',
        price: '430.00 USD',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/bulova-mens-precisionist-champlain-diver.jpg',
        brand: 'Breo',
        title: 'Men\'s chronograph',
        price: '140.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-edifice-alarm-chronograph-solar-powered.jpg',
        brand: 'Breo',
        title: 'Men\'s chronograph',
        price: '430.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-edifice-chronograph.jpg',
        brand: 'Breo',
        title: 'Men\'s chronograph',
        price: '250.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-edifice-chronograph2.jpg',
        brand: 'Breo',
        title: 'Unisex Santiago 42',
        price: '100.00 USD',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-edifice-chronograph3.jpg',
        brand: 'Breo',
        title: 'Unisex Santiago 42',
        price: '100.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-edifice-red-bull-chronograph.jpg',
        brand: 'Breo',
        title: 'Unisex Santiago',
        price: '340.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-edifice-red-bull-racing-limited-edition-alarm.jpg',
        brand: 'Calvin Klein',
        title: 'Unisex Santiago',
        price: '340.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-edifice-wave-ceptor-alarm-chronograph-radio.jpg',
        brand: 'Calvin Klein',
        title: 'Men\'s chronograph',
        price: '230.00 USD',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-chock-alarm-chronograph2.jpg',
        brand: 'Calvin Klein',
        title: 'Men\'s chronograph',
        price: '140.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-alarm-chronograph.jpg',
        brand: 'Calvin Klein',
        title: 'Men\'s chronograph',
        price: '430.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-alarm-chronograph3.jpg',
        brand: 'Calvin Klein',
        title: 'Men\'s chronograph',
        price: '250.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-alarm-chronograph4.jpg',
        brand: 'Calvin Klein',
        title: 'Unisex Santiago 42',
        price: '100.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-alarm-chronograph5.jpg',
        brand: 'Character',
        title: 'Unisex Santiago',
        price: '340.00 USD',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-alarm-chronograph6.jpg',
        brand: 'Citizen Drive',
        title: 'Men\'s chronograph',
        price: '230.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-alarm-chronograph7.jpg',
        brand: 'Citizen Drive',
        title: 'Men\'s chronograph',
        price: '140.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-alarm-chronograph8.jpg',
        brand: 'Daniel Wellington',
        title: 'Men\'s chronograph',
        price: '430.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-alarm-chronograph9.jpg',
        brand: 'Diesel',
        title: 'Unisex Santiago',
        price: '340.00 USD',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-alarm-chronograph-radio-controlled.jpg',
        brand: 'Diesel',
        title: 'Men\'s chronograph',
        price: '230.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-gravity-defier-alarm-chronograph-radio.jpg',
        brand: 'Diesel',
        title: 'Men\'s chronograph',
        price: '140.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-gravity-defier-alarm-chronograph-radio2.jpg',
        brand: 'Diesel',
        title: 'Men\'s chronograph',
        price: '250.00 USD',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-g-rescue-alarm-chronograph.jpg',
        brand: 'Diesel',
        title: 'Unisex Santiago 42',
        price: '100.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-g-rescue-alarm-chronograph2.jpg',
        brand: 'Diesel',
        title: 'Unisex Santiago',
        price: '340.00 USD',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-premium-gravity-defier-alarm-chronograph.jpg',
        brand: 'Diesel',
        title: 'Men\'s chronograph',
        price: '230.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-premium-gravity-defier-alarm-chronograph2.jpg',
        brand: 'Diesel',
        title: 'Men\'s chronograph',
        price: '140.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-sky-cockpit-alarm-chronograph.jpg',
        brand: 'DKNY',
        title: 'Men\'s chronograph',
        price: '430.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-g-shock-waveceptor-alarm-chronograph-radio.jpg',
        brand: 'Emporio Armani',
        title: 'Men\'s chronograph',
        price: '250.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-premium-g-shock-gravity-master-gps-hybrid-alarm.jpg',
        brand: 'Emporio Armani',
        title: 'Unisex Santiago 42',
        price: '100.00 USD',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-waveceptor-alarm-chronograph.jpg',
        brand: 'Emporio Armani',
        title: 'Unisex Santiago',
        price: '340.00 USD',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-mens-waveceptor-titanium-alarm-chronograph.jpg',
        brand: 'Emporio Armani',
        title: 'Men\'s chronograph',
        price: '230.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-unisex-clasic-alarm-chronograph.jpg',
        brand: 'Emporio Armani',
        title: 'Men\'s chronograph',
        price: '140.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-unisex-classic.jpg',
        brand: 'Emporio Armani',
        title: 'Men\'s chronograph',
        price: '430.00 USD',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-unisex-classic-alarm-chronograph.jpg',
        brand: 'Firetrap',
        title: 'Men\'s chronograph',
        price: '250.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-unisex-classic-alarm-chronograph2.jpg',
        brand: 'Firetrap',
        title: 'Unisex Santiago 42',
        price: '100.00 USD',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/casio-unisex-classic-alarm-chronograph3.jpg',
        brand: 'Firetrap',
        title: 'Unisex Santiago',
        price: '340.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-calibre-8700-alarm-diamond-eco-drive.jpg',
        brand: 'Fossil',
        title: 'Men\'s chronograph',
        price: '230.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-calibre-8700-alarm-eco-drive.jpg',
        brand: 'Fossil',
        title: 'Men\'s chronograph',
        price: '140.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-calibre-8700-alarm-eco-drive2.jpg',
        brand: 'Fossil',
        title: 'Men\'s chronograph',
        price: '430.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-calibre-8700-eco-drive.jpg',
        brand: 'Fossil',
        title: 'Men\'s chronograph',
        price: '250.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-chrono-pepretual-a-t-alarm-chronograph-radio.jpg',
        brand: 'Fossil',
        title: 'Unisex Santiago 42',
        price: '100.00 USD',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-chrono-perpetua-a-t-alarm-chronograph-radio.jpg',
        brand: 'Fossil',
        title: 'Men\'s chronograph',
        price: '250.00 USD',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-chrono-perpetual-a-t-alarm-chronograph-radio.jpg',
        brand: 'Fossil',
        title: 'Unisex Santiago 42',
        price: '100.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-chrono-perpetual-au-alarm-chronoograph-radio.jpg',
        brand: 'Fossil',
        title: 'Unisex Santiago',
        price: '340.00 USD',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-eco-drive.jpg',
        brand: 'KENZO',
        title: 'Men\'s chronograph',
        price: '250.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-golf-eco-drive.jpg',
        brand: 'KENZO',
        title: 'Unisex Santiago 42',
        price: '100.00 USD',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-mesh-chronograph-eco-drive.jpg',
        brand: 'KENZO',
        title: 'Unisex Santiago',
        price: '340.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-mesh-chronograph-eco-drive2.jpg',
        brand: 'KENZO',
        title: 'Men\'s chronograph',
        price: '230.00 USD',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-navihawk-alarm-chronograph-radio-controlled.jpg',
        brand: 'KENZO',
        title: 'Men\'s chronograph',
        price: '140.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-nightawk-chronograph-eco-drive.jpg',
        brand: 'KENZO',
        title: 'Men\'s chronograph',
        price: '430.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-nightawk-titanium-chronograph-eco-drive.jpg',
        brand: 'Michael Kors',
        title: 'Men\'s chronograph',
        price: '230.00 USD',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-red-arrows-world-time-chronograph-eco-drive.jpg',
        brand: 'Michael Kors',
        title: 'Men\'s chronograph',
        price: '140.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-skyhawk-a-t-red-arrows-titanium-alarm-chronograph.jpg',
        brand: 'Michael Kors',
        title: 'Men\'s chronograph',
        price: '430.00 USD',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/mens-watches/citizen-mens-titatium-eco-drive.jpg',
        brand: 'Michael Kors',
        title: 'Unisex Santiago',
        price: '340.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/davosa-mens-ternos-ceramic-automatic.jpg',
        brand: 'Michael Kors',
        title: 'Men\'s chronograph',
        price: '230.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/diesel-men-goose-chronograph.jpg',
        brand: 'Michael Kors',
        title: 'Men\'s chronograph',
        price: '140.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/diesel-mens-big-daddy-chronograph.jpg',
        brand: 'Michael Kors',
        title: 'Men\'s chronograph',
        price: '430.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/diesel-mens-big-daddy-chronograph2.jpg',
        brand: 'Michael Kors',
        title: 'Men\'s chronograph',
        price: '250.00 USD',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/mens-watches/diesel-mens-big-daddy-chronograph3.jpg',
        brand: 'Vivienne Westwood',
        title: 'Men\'s chronograph',
        price: '250.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/diesel-mens-big-daddy-chronograph4.jpg',
        brand: 'Vivienne Westwood',
        title: 'Unisex Santiago 42',
        price: '100.00 USD',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/mens-watches/diesel-mens-franchise-silicon.jpg',
        brand: 'Vivienne Westwood',
        title: 'Men\'s chronograph',
        price: '430.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/diesel-mens-master-chief-chronograph.jpg',
        brand: 'Vivienne Westwood',
        title: 'Men\'s chronograph',
        price: '250.00 USD',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/mens-watches/diesel-mens-master-chief-chronograph2.jpg',
        brand: 'Vivienne Westwood',
        title: 'Unisex Santiago 42',
        price: '100.00 USD',
        category: 'Luxury'
    }];