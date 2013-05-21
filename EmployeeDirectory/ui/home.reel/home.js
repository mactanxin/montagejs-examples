/**
    @module "ui/home.reel"
    @requires montage
    @requires montage/ui/component
*/
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component;

/**
    Description TODO
    @class module:"ui/home.reel".Home
    @extends module:montage/ui/component.Component
*/
exports.Home = Montage.create(Component, /** @lends module:"ui/home.reel".Home# */ {
    
    handleOpenSearchButtonAction: {
        value: function(action) {
            console.log("here");
            this.dispatchEventNamed("openSearchEvent", true, true, null);
        }
    }
});
