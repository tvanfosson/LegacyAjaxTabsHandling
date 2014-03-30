// define defines a module
// require should only be on a page;  it consumes one
define([
    'require',
    'jquery',
    'jquery-ui',
    './legacyapp',
    './controllers/summary',
    './controllers/details'
],
function (
    require,
    $
) {
    'use strict';
    
    var App = function () {
        this._tabs = $('#tabs');
    };

    App.prototype.init = function () {
        this.controllers = {};
        this.setUpHandlers()
            .bind();
    };

    App.prototype.setUpHandlers = function () {
        this.loadHandler = $.proxy(this.tabLoaded, this);
        return this;
    };

    App.prototype.tabLoaded = function (event, ui) {
        console.log(ui.tab.text(), 'loaded');

        // grab the link that was just clicked
        var href = ui.tab.find('a').attr('href');

        /* one way... 
        var controllerName = href.substr(href.lastIndexOf('/') + 1);
        var controller = require('./controllers/' + controllerName);
        */

        // require the related (defined) controller class
        var controllerModule = href.replace(/\/home/, './controllers');
        // instantiates, (inits) builds children if necessary
        var controllerInstance = this.getController(controllerModule, ui.panel);
        controllerInstance.render();
    };

    App.prototype.bind = function () {
        this._tabs.tabs('option', 'load', this.loadHandler);
        return this;
    };

    App.prototype.getController = function(module, contents) {
        // check the cache
        if (!this.controllers[module]) {
            // require it; 
            var controller = require(module);
            // cache it;
            this.controllers[module] =
                // instantiate it; call init
                new controller(contents).init();
        }
        return this.controllers[module];
    };

    $(function () {
        window.App = new App();
        window.App.init();
    });

});