define(function (require) {
    var $ = require('jquery');

    var details = function (selector) {
        this.selector = selector;
    };

    details.prototype.init = function () {
        this.setupHandlers()
            .bind();
    };

    details.prototype.setupHandlers = function () {
        return this;
    };

    details.prototype.bind = function () {
        this.$container = $(this.selector);
        return this;
    };

    return details;
});