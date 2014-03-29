define(function(require) {
    var $ = require('jquery');

    var summary = function (selector) {
        this.selector = selector;
    };

    summary.prototype.init = function () {
        this.setupHandlers()
            .bind();
    };

    summary.prototype.setupHandlers = function() {
        return this;
    };

    summary.prototype.bind = function () {
        this.$container = $(this.selector);
        return this;
    };

    return summary;
});