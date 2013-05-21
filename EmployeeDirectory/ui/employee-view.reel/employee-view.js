/**
    @module "ui/employee-view.reel"
    @requires montage
    @requires montage/ui/component
*/
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component;

/**
    Description TODO
    @class module:"ui/employee-view.reel".EmployeeView
    @extends module:montage/ui/component.Component
*/
exports.EmployeeView = Montage.create(Component, /** @lends module:"ui/employee-view.reel".EmployeeView# */ {
    templateDidLoad: {
        value: function(event) {
            var scope = this;
            this.managerLinkElement.addEventListener("click",function(event){
                scope.dispatchEventNamed("selectedEmployeeEvent", true, true, {employeeId: scope.data.managerId});
                }, false);
            if (this.data)
            {
                this.emailLinkElement.href = "mailto: " + this.data.email;
            }
        }
    },

    hasManager: {
        value: false    
    },
    hasDirectReports: {
        value: false
    },
    
    employeeImageSrc: {
        value: ""   
    },
    directReportsName: {
        value: ""   
    },
    
    _directReports: {
        value: []   
    },

    directReports: {
        set: function(val){
            this._directReports = val;
            if (val)
            { 
                this.hasDirectReports = !(this._directReports.length > 0); 
            }
        },
        get: function(){
            return this._directReports;
        }
    },
    _data: {
        value: null
    },

    data: {
        set: function(val){
            this._data = val;
            if (val)
            { 
                this.hasManager = (this._data.managerId > 0); 
                this.employeeImageSrc = "pics/" + this._data.firstName + "_" + this._data.lastName + ".jpg";
                this.directReportsName = this._data.firstName + " " + this._data.lastName;
            }
        },
        get: function(){
            return this._data;
        }
    }
});
