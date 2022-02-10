sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("com.yash.assignment4.controller.OutboundShipment", {
            onInit: function () {
                this.getView().setModel(new JSONModel({
                    "shipmentID": ""
                }), "model");
                this._oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                this._oRouter.getRoute("RouteOutboundShipment").attachPatternMatched(this._onRouteMatched, this);
                // this._oRouter.getRoute("RouteOutboundShipment").attachPatternMatched(this._onRouteMatched,this);
            },
            onContinue:function(oEvent){
                var sID = this.getView().getModel("model").getData().shipmentID;
                if (sID === "12345") {
                    this.getView().getModel("model").setProperty("/shipmentID", "");
                    this._oRouter.navTo("ShipmentConfirmationDetails");
                }
                else 
                if (!this.tDialog) {
                        this.tDialog = this.loadFragment({
                          name: "com.yash.assignment4.view.fragments.Invalid"
                        });
                    }
                    this.tDialog.then(function(rDialog) {
                        rDialog.open();
                    });
                //    this._oRouter.navTo("ShipmentConfirmationDetails");
                
            },
            onBack:function(oEvent){
                this._oRouter.navTo("RouteWelcome");
            },
            onDialogOpen : function () {
                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "com.yash.assignment4.view.fragments.Request"
                    });
                }
                this.pDialog.then(function(oDialog) {
                    oDialog.open();
                });
            },

            onBackDialog : function () {
                this.byId("dialog").close();
            },

            onShipingId: function () {
                if (!this.aDialog) {
                    this.aDialog = this.loadFragment({
                        name: "com.yash.assignment4.view.fragments.NoShipmentId"
                    });
                }
                this.aDialog.then(function(mDialog) {
                    mDialog.open();
                });
            },
            onCloseDialog : function () {
                this.byId("helloDialog").close();
            },

            onBackBackDialog : function () {
                this.byId("hello").close();
            }

        });
    });
