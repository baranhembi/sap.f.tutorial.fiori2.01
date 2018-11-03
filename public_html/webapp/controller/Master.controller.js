sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    'sap/ui/model/Sorter',
    'sap/m/MessageBox'
], function (JSONModel, Controller, Filter, FilterOperator, Sorter, MessageBox) {
    "use strict";

    return Controller.extend("sap.ui.demo.fiori2.controller.Master", {
        onInit: function () {
            this.oView = this.getView();
            this._bDescendingSort = false;
            this.oProductsTable = this.oView.byId("productsTable");
        },

        onSearch: function (oEvent) {
            var oTableSearchState = [],
                    sQuery = oEvent.getParameter("query");

            if (sQuery && sQuery.length > 0) {
                oTableSearchState = [new Filter("Name", FilterOperator.Contains, sQuery)];
            }

            this.oProductsTable.getBinding("items").filter(oTableSearchState, "Application");
        },

        onAdd: function () {
            // read msg from i18n model .
            //var oBundle = this.getView().getModel("i18n").getResourceBundle();
            //var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            //var sMsg = oBundle.getText("addButton", [sRecipient]);
            //MessageToast.show(sMsg);

            MessageBox.show("Função não implementada.", {
                icon: MessageBox.Icon.INFORMATION,
                title: "Ops!",
                actions: [MessageBox.Action.OK]
            });
        },

        onSort: function () {
            this._bDescendingSort = !this._bDescendingSort;
            var oBinding = this.oProductsTable.getBinding("items"),
                    oSorter = new Sorter("Name", this._bDescendingSort);

            oBinding.sort(oSorter);
        }
    });
}, true);