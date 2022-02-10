sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.yash.assignment4.controller.Traller", {
            onInit: function () {

                this._oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            },
            onTraping:function(oEvent){
                this._oRouter.navTo("TarpingRequirements");
            },
            onBack:function(oEvent){
                this._oRouter.navTo("CellConfirmation");
            },
            onWelcome:function(oEvent){
                this._oRouter.navTo("RouteWelcome");
            }
        });
    });
