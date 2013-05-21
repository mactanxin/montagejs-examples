/**
    @module "ui/employee-list-itemview.reel"
    @requires montage
    @requires montage/ui/component
*/
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component;

/**
    Description TODO
    @class module:"ui/employee-list-item-view.reel".EmployeeListItemView
    @extends module:montage/ui/component.Component
*/
exports.EmployeeListItemView = Montage.create(Component, /** @lends module:"ui/employee-list-item-view.reel".EmployeeListItemView# */ {
    templateDidLoad: {
        value: function(event) {
            var scope = this;
            this.itemLinkElement.addEventListener("click",function(event){
                scope.dispatchEventNamed("selectedEmployeeEvent", true, true, {employee: scope.data});
           }, false);
        }
    },
    
    employeeImageSrc: {
        value: ""   
    },
    _data: {
        value: null
    },

    data: {
        set: function(val){
            this._data = val;
            if (val)
                this.employeeImageSrc = "pics/" + this._data.firstName + "_" + this._data.lastName + "50.jpg";
        },
        get: function(){
            return this._data;
        }
    }

    
});
