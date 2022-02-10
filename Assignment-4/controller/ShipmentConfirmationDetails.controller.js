sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.yash.assignment4.controller.ShipmentConfirmationDetails", {
            onInit: function () {

                this._oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            },
            onContinue:function(oEvent){
                this._oRouter.navTo("CellPhoneEntry");
            },
            onBack:function(oEvent){
                this._oRouter.navTo("RouteOutboundShipment");
            },
            onWelcome:function(oEvent){
                this._oRouter.navTo("RouteWelcome");
            }
        });
    });
