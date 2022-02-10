sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.yash.assignment4.controller.PPEAndPolicies", {
            onInit: function () {

                this._oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            },
            onCheck:function(oEvent){
                // this._oRouter.navTo("Check");
                    if (!this.aDialog) {
                        this.aDialog = this.loadFragment({
                            name: "com.yash.assignment4.view.fragments.ConfirmCheck"
                        });
                    }
                    this.aDialog.then(function(mDialog) {
                        mDialog.open();
                    });
                },
            onBack:function(oEvent){
                this._oRouter.navTo("TarpingRequirements");
            },
            onCloseDialog : function () {
                this.byId("helloDialog").close();
                this._oRouter.navTo("RouteWelcome");
            },
        });
    });
