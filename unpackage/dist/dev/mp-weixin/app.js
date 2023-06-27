"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/login/login.js";
  "./pages/tabbar/main/main.js";
  "./pages/tabbar/orderingFoodBar/orderingFood.js";
  "./pages/tabbar/poitnsMallBar/pointsMall.js";
  "./pages/tabbar/orderManageBar/orderManage.js";
  "./pages/tabbar/userBar/user.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/QS/OneDrive/笔记文件/QsWxItem/QsWeChat/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
