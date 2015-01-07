/// <reference path="C:\Users\Lili\documents\visual studio 2013\Projects\OnlineWatchShop\OnlineWatchShop\libs/jquery-2.1.1.js" />
var testimonialsArr = [{
    content: '"In 1979 I purchased a Rotary Aquaplunge. After 30 years this watch still keeps perfect time and has only had batteries replaced in that time. It travels with me everywhere and is used for diving and swimming. To this day, it has never missed a beat.<br/><br/>I see that you now do an “Aquaspeed” collection and I feel privileged to be in possession of a watch that could have been the inspiration for this!"',
        author: 'Simon Bowden'
    },{
        content: '"I thought that I should write to you to tell you how impressed I am with this product. When I purchased it all those years ago, I never entertained the thought that it would still be on my wrist after 30 years! Some of my friends have urged me to replace it for a more up to date model but why would I get rid of a perfectly good watch that has served me so well and now represents years of wonderful memories."',
        author: 'Eric Johnson'
    },{
        content: '"I received the watch on Monday and it looks great! I am ecstatic about your service and the quality of the product! Ordered on Friday night and received it on Monday afternoon! This is quicker shipping than when I order items in Australia! It looks and feels great. I was a bit concerned about the weight due to the reviews I read, but it feels extremely comfortable on my hand, no matter which strap I use. The watch itself is extremely well built, looks/feels sturdy and the size is just right."',
        author: 'Matthew Green'
    },{
        content: '"Whilst on honeymoon a couple boarded the ill fated Empress Samina, the Greek ferry which sank just off the coast of the Greek Island, Paros. Although Mr and Mrs Richards nearly drowned, they survived the tragedy that claimed 88 lives. Mr Richards wrote to us to tell us they had lost everything in the disaster except for one item, his Rotary watch. Despite being immersed in water for several hours and thrown repeatedly against rocks, his Rotary watch survived intact and still keeps excellent time to this day."',
        author: 'Dirk Hainey'
    },{
        content: '"While re-tarmacing his drive Mr Smith of the Isle of Man lost his Rotary watch. Having searched to no avail he feared it may have fallen into the drum of boiling bitumen, but carried on with the job hoping that perhaps the watch might turn up. Two hours later he came across a black sausage shaped object at the bottom of the drum - his Rotary watch! Hoping to at least salvage the metal bracelet he washed it down with a high pressure hose and left it while he completed the drive. Imagine his surprise when he picked the watch up at the end of the day to find it was not only still going but also had kept time and two years on it still works perfectly!"',
        author: 'Seymour Glass'
    }, {
        content: '"Rotary was keen to help an 85 year old pensioner who wrote that after a lifetime of service, his 60 year old Rotary watch now needed winding up several times a day. He is particularly attached to the watch, given to him by his wife who died in 1949 and he has never been without it since. Rotary was delighted to repair the watch free of charge and return it post haste."',
        author: 'Buckminster C.'
    }
];

var $testimonials = $('#testimonials-body-content');

for (var testimonial in testimonialsArr) {
    $testimonials.append('<div><p>' + testimonialsArr[testimonial].content + '</p><p>— ' + testimonialsArr[testimonial].author + '</p></div>');
}