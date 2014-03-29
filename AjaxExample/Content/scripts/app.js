require(['require', 'jquery', 'controllers/summary', 'controllers/details'], function (require) {
    'use strict';

    var $ = require('jquery');
    var SummaryController = require('controllers/summary');
    var DetailsController = require('controllers/details');

    var App = function () {
        this.summaryController = new SummaryController('.js-summary-container');
        this.detailsController = new DetailsController('.js-details-container');
    }

    App.prototype.init = function() {
        this.setUpHandlers()
            .bind();
    };

    App.prototype.setUpHandlers = function () {
        this.summaryLoadedHandler = $.proxy(this.summaryLoaded, this);
        this.detailsLoadedHandler = $.proxy(this.detailsLoaded, this);

        return this;
    };

    App.prototype.bind = function () {
        $(document).on('ajaxComplete', this.summaryLoadedHandler);
        $(document).on('ajaxComplete', this.detailsLoadedHandler);

        return this;
    };

    App.prototype.summaryLoaded = function(evt, xhr, settings) {
        this.handleLoadEvent(settings, /^\/home\/summary/i, this.summaryController, this.summaryLoadedHandler);
    };

    App.prototype.detailsLoaded = function(evt, xhr, settings) {
        this.handleLoadEvent(settings, /^\/home\/details/i, this.detailsController, this.detailsLoadedHandler);
    };

    App.prototype.handleLoadEvent = function(settings, urlRegex, controller, handler) {
        if (settings.url.match(urlRegex)) {
            $(document).off('ajaxComplete', handler);
            setTimeout(function () {
                // let the tab finish loading first, then initialize the controller
                // the timeout value of 0 let's the tab thread complete
                // then executes this immediately (or at least that's the theory)
                controller.init();
            }, 0);
        }
    };

    $(function () {
        window.App = new App();
        window.App.init();
    });

});