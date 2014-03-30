define(function (require) {
    var $ = require('jquery');

    var details = function (selector) {
        this.selector = selector;
    };

    details.prototype.init = function () {
        this.setupHandlers()
            .bind()
            .createChildren();

        return this;
    };

    details.prototype.setupHandlers = function () {
        return this;
    };

    details.prototype.bind = function () {
        this.$container = $(this.selector);
        return this;
    };

    details.prototype.createChildren = function () {
        this.$someDetails = $('<ul>');
        var $listItems = $('<li>');

        var textItems = [
            'these',
            'are',
            'details'
        ];

        textItems.forEach(function (text) {
            var $item = $('<li>');
            $listItems.append($item);
            $item.text(text);
        });

        this.$someDetails.append($listItems);
    };

    details.prototype.render = function() {
        this.$container.append(this.$someDetails);
    };

    return details;
});