/// <reference path="C:\Users\Lili\documents\visual studio 2013\Projects\OnlineWatchShop\OnlineWatchShop\libs/jquery-2.1.1.js" />
function initializeMap() {
    var mapCanvas = document.getElementById('contacts-map-canvas');
    var myLatlng = new google.maps.LatLng(42.659806, 23.322203);
    var mapOptions = {
        center: myLatlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
                                            position: myLatlng,
                                            map: map,
                                            title: 'ulitsa "Srebarna" 28, Sofia'
                                        });
}
google.maps.event.addDomListener(window, 'load', initializeMap);

$(document).ready(function () {
    $('input').focus(function () {
        $(this).addClass('selected');
    });
    $('input').blur(function () {
        $(this).removeClass('selected');
    });
    $('textarea').focus(function () {
        $(this).addClass('selected');
    });
    $('textarea').blur(function () {
        $(this).removeClass('selected');
    });
});

$(document).ready(function () {
    var lastThreeParagraphs = $('#contacts-sidebar p').slice(-3);
    lastThreeParagraphs.addClass('first-letter');
})

$(document).ready(function () {
    document.getElementById('submitBtn').onclick = function validateForm(e) {
        e.preventDefault();
        var isValid = true;
        var firstNameValue = document.forms['contacts-form']['first-name'].value;
        var lastNameValue = document.forms['contacts-form']['last-name'].value;
        var emailValue = document.forms['contacts-form']['email'].value;
        var messageValue = document.forms['contacts-form']['message'].value;
        var nameLbl = document.getElementById('nameLbl');
        var firstNameLbl = document.getElementById('firstNameLbl');
        var lastNameLbl = document.getElementById('lastNameLbl');
        var emailLbl = document.getElementById('emailLbl');
        var messageLbl = document.getElementById('messageLbl');

        if (!(firstNameValue && lastNameValue)) {
            appendErrorMessage(nameLbl, ' is required.');
            changeLabelColor(nameLbl);
            isValid = false;
            if (!firstNameValue) {
                changeInputBorderColor('first-name');
                changeLabelColor(firstNameLbl);
            } else {
                changeBackInputBorderColor('first-name');
                changeBackLabelColor(firstNameLbl);
            }
            if (!lastNameValue) {
                changeInputBorderColor('last-name');
                changeLabelColor(lastNameLbl);
            } else {
                changeBackInputBorderColor('last-name');
                changeBackLabelColor(lastNameLbl);
            }
        } else {
            removeErrorMessage(nameLbl);
            changeBackLabelColor(nameLbl);
            changeBackInputBorderColor('first-name');
            changeBackLabelColor(firstNameLbl);
            changeBackInputBorderColor('last-name');
            changeBackLabelColor(lastNameLbl);
        }
        if (!emailValue) {
            appendErrorMessage(emailLbl, ' is required.');
            changeLabelColor(emailLbl);
            changeInputBorderColor('email');
            isValid = false;
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
            appendErrorMessage(emailLbl, ' is not valid. Email addresses should follow the format user@domain.com.');
            changeLabelColor(emailLbl);
            changeInputBorderColor('email');
            isValid = false;
        } else {
            removeErrorMessage(emailLbl);
            changeBackInputBorderColor('email');
            changeBackLabelColor(emailLbl);
        }
        if (!messageValue) {
            appendErrorMessage(messageLbl, ' is required.');
            changeLabelColor(messageLbl);
            changeInputBorderColor('message');
            isValid = false;
        } else {
            removeErrorMessage(messageLbl);
            changeBackInputBorderColor('message');
            changeBackLabelColor(messageLbl);
        }

        if (isValid) {
        $('form').css('display', 'none');
        var thankYouText = $('<p></p>').text("Tsank you !!! :-P ;-)").css('margin', '20px 0 60px 70px').css('float', 'left');
        $('#contacts-sidebar').before(thankYouText);
        }

        return isValid;
    };
});

function appendErrorMessage(errorLbl, content) {
    var errorMessage = document.getElementById('error' + errorLbl.innerHTML);
    if (errorMessage === null) {
        errorMessage = document.createElement('label');
        errorMessage.id = 'error' + errorLbl.innerHTML;
    }
    var errorLblParent = errorLbl.parentNode;
    var nameOfTheLabel = errorLbl.innerHTML;
    nameOfTheLabel = nameOfTheLabel.substring(0, nameOfTheLabel.length - 2);
    errorMessage.innerHTML = nameOfTheLabel + content;
    errorMessage.className = 'form-error';
    errorLblParent.insertBefore(errorMessage, errorLbl);
    errorLbl.style.marginTop = '13px';
}

function removeErrorMessage(errorLbl) {
    var errorMessage = document.getElementById('error' + errorLbl.innerHTML);
    if (errorMessage) {
        errorMessage.parentNode.removeChild(errorMessage);
    }
    errorLbl.style.marginTop = '25px';
}

function changeInputBorderColor(inputElementId) {
    var input = document.getElementById(inputElementId);
    input.className = 'error-input';
}

function changeBackInputBorderColor(inputElementId) {
    var input = document.getElementById(inputElementId);
    input.className = '';
}

function changeLabelColor(errorLbl) {
    if (errorLbl.classList.contains('small')) {
        errorLbl.className = errorLbl.className + ' error-label';
    } else {
        errorLbl.className = 'error-label';
    }
}

function changeBackLabelColor(errorLbl) {
    if (errorLbl.classList.contains('small')) {
        errorLbl.className = 'small';
    } else {
        errorLbl.className = '';
    }
};