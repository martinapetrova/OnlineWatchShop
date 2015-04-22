/// <reference path="../libs/jquery-2.1.1.js" />

$.getScript('../scripts/shop.js');

var ladiesWatches = [
     {
         imageSource: '../images/shop-images/ladies-watches/accurist-ladies-chronograph.jpg',
         brand: 'Accurist',
         title: 'Lady\'s chronograph',
         price: '230.00 лв.',
         category: 'Classic'
     },
    {
        imageSource: '../images/shop-images/ladies-watches/accurist-ladies-chronograph2.jpg',
        brand: 'Accurist',
        title: 'Lady\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/accurist-ladies-chronograph3.jpg',
        brand: 'Accurist',
        title: 'Lady\'s chronograph',
        price: '430.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/accurist-london-ladies-chronograph.jpg',
        brand: 'Accurist',
        title: 'Lady\'s chronograph',
        price: '250.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/ladies-watches/adidas-unisex-santiago-42.jpg',
        brand: 'Adidas',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Designer Label'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/adidas-unisex-santiago.jpg',
        brand: 'Adidas',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/armani-exchange-ladies-banks-chronograph.jpg',
        brand: 'Adidas',
        title: 'Lady\'s chronograph',
        price: '230.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/armani-exchange-ladies-banks-chronograph2.jpg',
        brand: 'Armani Exchange',
        title: 'Lady\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/armani-exchange-ladies-banks-chronograph3.jpg',
        brand: 'Armani Exchange',
        title: 'Lady\'s chronograph',
        price: '430.00 лв.',
        category: 'Designer Label'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/armani-exchange-ladies-banls-chronograph.jpg',
        brand: 'Armani Exchange',
        title: 'Lady\'s chronograph',
        price: '250.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/armani-exchange-ladies-hampton.jpg',
        brand: 'Armani Exchange',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Designer Label'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/armani-exchange-ladies-hampton2.jpg',
        brand: 'Armani Exchange',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/ladies-watches/armani-exchange-ladies-hampton3.jpg',
        brand: 'Ben Sherman',
        title: 'Lady\'s chronograph',
        price: '230.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/armani-exchange-ladies-tenno.jpg',
        brand: 'Ben Sherman',
        title: 'Lady\'s chronograph',
        price: '140.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/ladies-watches/armani-exchange-ladies-zulu-chronograph.jpg',
        brand: 'Ben Sherman',
        title: 'Lady\'s chronograph',
        price: '430.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/breo-unisex-classic.jpg',
        brand: 'Ben Sherman',
        title: 'Lady\'s chronograph',
        price: '250.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/breo-unisex-classic2.jpg',
        brand: 'Black Dice',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Sports'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/bulova-ladies-automatic.jpg',
        brand: 'Black Dice',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/ladies-watches/bulova-ladies-marine-staart-duramic-blue-chronograph.jpg',
        brand: 'Breo',
        title: 'Lady\'s chronograph',
        price: '230.00 лв.',
        category: 'Luxury'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/bulova-ladies-marine-star-chronograph.jpg',
        brand: 'Breo',
        title: 'Lady\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/bulova-ladies-marine-star.jpg',
        brand: 'Breo',
        title: 'Lady\'s chronograph',
        price: '430.00 лв.',
        category: 'Sports'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/bulova-ladies-mechanicaals-automatic.jpg',
        brand: 'Breo',
        title: 'Lady\'s chronograph',
        price: '250.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/ladies-watches/bulova-ladies-mechanicals-automatic.jpg',
        brand: 'Breo',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/bulova-ladies-precisionist-champlain-chronograph.jpg',
        brand: 'Breo',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/ladies-watches/bulova-ladies-precisionist-champlain-diver.jpg',
        brand: 'Calvin Klein',
        title: 'Lady\'s chronograph',
        price: '230.00 лв.',
        category: 'Luxury'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-edifice-alarm-chronograph-solar-powered.jpg',
        brand: 'Calvin Klein',
        title: 'Lady\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-edifice-chronograph.jpg',
        brand: 'Calvin Klein',
        title: 'Lady\'s chronograph',
        price: '430.00 лв.',
        category: 'Sports'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-edifice-chronograph2.jpg',
        brand: 'Calvin Klein',
        title: 'Lady\'s chronograph',
        price: '250.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-edifice-chronograph3.jpg',
        brand: 'Calvin Klein',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Sports'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-edifice-red-bull-chronograph.jpg',
        brand: 'Calvin Klein',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-edifice-red-bull-racing-limited-edition-alarm.jpg',
        brand: 'Calvin Klein',
        title: 'Lady\'s chronograph',
        price: '230.00 лв.',
        category: 'Designer Label'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-edifice-wave-ceptor-alarm-chronograph-radio.jpg',
        brand: 'Calvin Klein',
        title: 'Lady\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-chock-alarm-chronograph2.jpg',
        brand: 'Calvin Klein',
        title: 'Lady\'s chronograph',
        price: '430.00 лв.',
        category: 'Luxury'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-alarm-chronograph-radio-controlled.jpg',
        brand: 'Character',
        title: 'Lady\'s chronograph',
        price: '250.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-alarm-chronograph.jpg',
        brand: 'Character',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Designer Label'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-alarm-chronograph3.jpg',
        brand: 'Character',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-alarm-chronograph4.jpg',
        brand: 'Citizen Drive',
        title: 'Lady\'s chronograph',
        price: '230.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-alarm-chronograph5.jpg',
        brand: 'Citizen Drive',
        title: 'Lady\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-alarm-chronograph6.jpg',
        brand: 'Citizen Drive',
        title: 'Lady\'s chronograph',
        price: '430.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-alarm-chronograph7.jpg',
        brand: 'Citizen Drive',
        title: 'Lady\'s chronograph',
        price: '250.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-alarm-chronograph8.jpg',
        brand: 'Daniel Wellington',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-alarm-chronograph9.jpg',
        brand: 'Daniel Wellington',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-g-rescue-alarm-chronograph.jpg',
        brand: 'Diesel',
        title: 'Lady\'s chronograph',
        price: '230.00 лв.',
        category: 'Luxury'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-g-rescue-alarm-chronograph2.jpg',
        brand: 'Diesel',
        title: 'Lady\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-gravity-defier-alarm-chronograph-radio.jpg',
        brand: 'Diesel',
        title: 'Lady\'s chronograph',
        price: '430.00 лв.',
        category: 'Sports'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-gravity-defier-alarm-chronograph-radio2.jpg',
        brand: 'Diesel',
        title: 'Lady\'s chronograph',
        price: '250.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-premium-gravity-defier-alarm-chronograph.jpg',
        brand: 'Diesel',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-premium-gravity-defier-alarm-chronograph2.jpg',
        brand: 'Diesel',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-sky-cockpit-alarm-chronograph.jpg',
        brand: 'Diesel',
        title: 'Lady\'s chronograph',
        price: '230.00 лв.',
        category: 'Luxury'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-g-shock-waveceptor-alarm-chronograph-radio.jpg',
        brand: 'Diesel',
        title: 'Lady\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-premium-g-shock-gravity-master-gps-hybrid-alarm.jpg',
        brand: 'Diesel',
        title: 'Lady\'s chronograph',
        price: '430.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-waveceptor-alarm-chronograph.jpg',
        brand: 'Diesel',
        title: 'Lady\'s chronograph',
        price: '250.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/ladies-watches/casio-ladies-waveceptor-titanium-alarm-chronograph.jpg',
        brand: 'DKNY',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-unisex-clasic-alarm-chronograph.jpg',
        brand: 'DKNY',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/ladies-watches/casio-unisex-classic-alarm-chronograph.jpg',
        brand: 'Emporio Armani',
        title: 'Lady\'s chronograph',
        price: '230.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-unisex-classic-alarm-chronograph2.jpg',
        brand: 'Emporio Armani',
        title: 'Lady\'s chronograph',
        price: '140.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/ladies-watches/casio-unisex-classic-alarm-chronograph3.jpg',
        brand: 'Emporio Armani',
        title: 'Lady\'s chronograph',
        price: '430.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/casio-unisex-classic.jpg',
        brand: 'Emporio Armani',
        title: 'Lady\'s chronograph',
        price: '250.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-calibre-8700-alarm-diamond-eco-drive.jpg',
        brand: 'Emporio Armani',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Luxury'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-calibre-8700-alarm-eco-drive.jpg',
        brand: 'Emporio Armani',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-calibre-8700-alarm-eco-drive2.jpg',
        brand: 'Emporio Armani',
        title: 'Lady\'s chronograph',
        price: '230.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-calibre-8700-eco-drive.jpg',
        brand: 'Firetrap',
        title: 'Lady\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-chrono-pepretual-a-t-alarm-chronograph-radio.jpg',
        brand: 'Fossil',
        title: 'Lady\'s chronograph',
        price: '430.00 лв.',
        category: 'Designer Label'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-chrono-perpetua-a-t-alarm-chronograph-radio.jpg',
        brand: 'Fossil',
        title: 'Lady\'s chronograph',
        price: '250.00 лв.',
        category: 'Luxury'
    }, {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-chrono-perpetual-a-t-alarm-chronograph-radio.jpg',
        brand: 'Fossil',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-chrono-perpetual-au-alarm-chronoograph-radio.jpg',
        brand: 'Fossil',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-eco-drive.jpg',
        brand: 'Fossil',
        title: 'Lady\'s chronograph',
        price: '230.00 лв.',
        category: 'Luxury'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-golf-eco-drive.jpg',
        brand: 'KENZO',
        title: 'Lady\'s chronograph',
        price: '140.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-mesh-chronograph-eco-drive.jpg',
        brand: 'KENZO',
        title: 'Lady\'s chronograph',
        price: '430.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-mesh-chronograph-eco-drive2.jpg',
        brand: 'KENZO',
        title: 'Lady\'s chronograph',
        price: '250.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-navihawk-alarm-chronograph-radio-controlled.jpg',
        brand: 'KENZO',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Luxury'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-nightawk-chronograph-eco-drive.jpg',
        brand: 'KENZO',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-nightawk-titanium-chronograph-eco-drive.jpg',
        brand: 'KENZO',
        title: 'Lady\'s chronograph',
        price: '230.00 лв.',
        category: 'Luxury'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-red-arrows-world-time-chronograph-eco-drive.jpg',
        brand: 'Michael Kors',
        title: 'Lady\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-skyhawk-a-t-red-arrows-titanium-alarm-chronograph.jpg',
        brand: 'Michael Kors',
        title: 'Lady\'s chronograph',
        price: '430.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/citizen-ladies-titatium-eco-drive.jpg',
        brand: 'Michael Kors',
        title: 'Lady\'s chronograph',
        price: '250.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/ladies-watches/davosa-ladies-ternos-ceramic-automatic.jpg',
        brand: 'Michael Kors',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Luxury'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/diesel-ladies-big-daddy-chronograph.jpg',
        brand: 'Michael Kors',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Designer Label'
    }, {
        imageSource: '../images/shop-images/ladies-watches/diesel-ladies-big-daddy-chronograph2.jpg',
        brand: 'Vivienne Westwood',
        title: 'Lady\'s chronograph',
        price: '230.00 лв.',
        category: 'Luxury'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/diesel-ladies-big-daddy-chronograph3.jpg',
        brand: 'Vivienne Westwood',
        title: 'Lady\'s chronograph',
        price: '140.00 лв.',
        category: 'Classic'
    }, {
        imageSource: '../images/shop-images/ladies-watches/diesel-ladies-big-daddy-chronograph4.jpg',
        brand: 'Vivienne Westwood',
        title: 'Lady\'s chronograph',
        price: '430.00 лв.',
        category: 'Classic'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/diesel-ladies-franchise-silicon.jpg',
        brand: 'Vivienne Westwood',
        title: 'Lady\'s chronograph',
        price: '250.00 лв.',
        category: 'Sports'
    }, {
        imageSource: '../images/shop-images/ladies-watches/diesel-ladies-master-chief-chronograph.jpg',
        brand: 'Vivienne Westwood',
        title: 'Unisex Santiago 42',
        price: '100.00 лв.',
        category: 'Luxury'
    },
    {
        imageSource: '../images/shop-images/ladies-watches/diesel-ladies-master-chief-chronograph2.jpg',
        brand: 'Vivienne Westwood',
        title: 'Unisex Santiago',
        price: '340.00 лв.',
        category: 'Classic'
    }];

addShopItemsToPage('#ladies-shop-body', ladiesWatches);
