define([
    'require',
    'jquery'
],
function (require, $) {
    var summary = function (selector) {
        this.selector = selector;
    };

    summary.prototype.init = function () {
        this.setupHandlers()
            .bind()
            .createChildren();
        return this;
    };

    summary.prototype.setupHandlers = function () {
        return this;
    };

    summary.prototype.bind = function () {
        this.$container = $(this.selector);
        return this;
    };

    summary.prototype.createChildren = function () {
        this.someRandomChild = $('<div>');
        this.someRandomChild.text(Math.random(10, 100));
    };

    summary.prototype.render = function() {
        this.$container.append(this.someRandomChild);
    };

    return summary;
});