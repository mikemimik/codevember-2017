var destUrl = 'https://www.kitco.com/market/';
var url = 'https://allorigins.us/get?url=';

$(document).ready(function () {
    console.log('ready!');

    $.ajax({
        dataType: 'json',
        url: url + encodeURIComponent(destUrl) + '&callback=?',
        success: function (data) {
            console.log('data:', data);
            var bid = $(data.contents).find('td#AU-bid')[0].textContent;
            var ask = $(data.contents).find('td#AU-ask')[0].textContent;
            var change = $(data.contents).find('td#AU-change').find('p')[0].textContent;
            var changeP = $(data.contents).find('td#AU-change-percent').find('p')[0].textContent;
            console.log('bid:', bid);
            console.log('ask:', ask);
            console.log('change:', change);
            console.log('changeP:', changeP);
            var element = $('<span class="quote"></span>');
            element.append('<span class="top-bar-text">Gold</span>');
            element.append('<span class="bold top-bar-text">$' + parseFloat(ask).toFixed(2) + '</span>');
            element.append('<span class"' + {color} + ' top-bar-text"> ' + {change} + ' (' + {changeP} + ') </span>');
            var quotes = $('.quote');
            if (quotes.length > 0)
        }
    });
});
