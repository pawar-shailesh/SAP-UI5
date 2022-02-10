sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.yash.assignment4.controller.Welcome", {
            onInit: function () {

                this._oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            },
            onPickingkUp:function(oEvent){
                this._oRouter.navTo("RouteOutboundShipment");
            },
            onDroppingOff:function(oEvent){
                this._oRouter.navTo("InboundDelivery");
            }
        });
    });
