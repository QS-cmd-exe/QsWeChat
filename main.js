// #ifndef VUE3
import Vue from 'vue'
import App from './App'

 

Vue.config.productionTip = false
Vue.prototype.appId = "wx85fa8a227b054d1f";



Vue.prototype.globalUser = function(key) {
	var globalUser = uni.getStorageSync(key)
	if (globalUser != null && globalUser != "" && globalUser != undefined) {
		return globalUser
	} else {
		return null
	}
}
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
