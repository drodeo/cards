/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from 'vue/dist/vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import 'vuetify/dist/vuetify.css'

import TurbolinksAdapter from 'vue-turbolinks';
Vue.use(TurbolinksAdapter);
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import { Navbar} from 'bootstrap-vue/es/components';
Vue.use(Navbar);
import { Tabs } from 'bootstrap-vue/es/components';
Vue.use(Tabs);
import { Card } from 'bootstrap-vue/es/components';
Vue.use(Card);
/*import  Notice  from 'components/Notice';
Vue.component('Notice', Notice);
Vue.use('Notice');*/
import App from '../app.vue';
document.addEventListener('DOMContentLoaded', () => {
document.addEventListener('turbolinks:load', () => {

    const app = new Vue({
        el: '#app',
/*        data: {
            message: "Can you say hello?"
        },
        components: { App }*/
        /*        props: {
                  notices: notices
            },*/
//
    })
})
});
