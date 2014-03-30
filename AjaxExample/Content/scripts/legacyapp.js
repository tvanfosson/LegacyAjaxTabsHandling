define([
    'require',
    'jquery',
    'bootstrap',
    'jquery-ui',
    'jquery-validate-unobtrusive'
], function (require, $) {
    'use strict';

    var $ = require('jquery');
    require('bootstrap');
    require('jquery-ui');
    require('jquery-validate-unobtrusive');

    $(function () {
        $('#tabs').tabs({
            beforeLoad: function (event, ui) {
                ui.jqXHR.error(function () {
                    ui.panel.html("Could't load this tab. Please try refreshing the page.");
                });
            }
        });
    });
});