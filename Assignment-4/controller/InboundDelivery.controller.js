sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.yash.assignment4.controller.InboundDelivery", {
            onInit: function () {

                this._oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            },
            onCell:function(oEvent){
                this._oRouter.navTo("CellPhoneEntry");
            },
            onWelcome:function(oEvent){
                this._oRouter.navTo("RouteWelcome");
            }
        });
    });
