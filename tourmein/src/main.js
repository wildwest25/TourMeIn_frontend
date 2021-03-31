import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/Global.css';
import Croppa from 'vue-croppa';
import 'vue-croppa/dist/vue-croppa.css';
import SimpleVueValidation from 'simple-vue-validator';
import VueCountryCode from 'vue-country-code-select';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(Croppa);
Vue.use(SimpleVueValidation);
Vue.use(VueCountryCode);

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
