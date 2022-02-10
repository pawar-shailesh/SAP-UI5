sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.yash.assignment4.controller.TarpingRequirements", {
            onInit: function () {

                this._oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            },
            onPpe:function(){
                this._oRouter.navTo("PPEAndPolicies");
            },
            onBack:function(){
                this._oRouter.navTo("Traller");
            }
        });
    });
