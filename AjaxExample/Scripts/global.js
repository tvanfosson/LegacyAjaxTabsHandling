
var Tabs = function () {
  
    var init = function() {
        $('#tabs').tabs({
            beforeLoad: function (event, ui) {
                ui.jqXHR.error(function () {
                    ui.panel.html("Could't load this tab. Please try refreshing the page.");
                });
            }
        });
    }

    init();
}

$(function() {
    window.Tabs = new Tabs();
});