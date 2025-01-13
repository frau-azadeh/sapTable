sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ], function (Controller, JSONModel) {
    "use strict";
  
    return Controller.extend("sap.ui.demo.Table.controller.Table", {
  
      onInit: function () {
        var oModel = new JSONModel({
          Products: [
            { ProductName: "Apple", Price: "1.00" },
            { ProductName: "Orange", Price: "0.80" },
            { ProductName: "Banana", Price: "0.50" }
          ]
        });
        this.getView().setModel(oModel);
      }
  
    });
  });
  