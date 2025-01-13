sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, Device, JSONModel) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.Table.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {
            // اجرای پایه‌ای UI5
            UIComponent.prototype.init.apply(this, arguments);

            // ایجاد مدل JSON برای داده‌ها
            var oModel = new JSONModel({
                items: [
                    { id: "1", name: "John Doe", age: "25" },
                    { id: "2", name: "Jane Smith", age: "30" },
                    { id: "3", name: "David Johnson", age: "35" }
                ]
            });

            this.setModel(oModel);
        }
    });
});
