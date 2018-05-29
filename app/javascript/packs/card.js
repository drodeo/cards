//require("card")


import Vue from 'vue/dist/vue.esm'
import Card from 'components/Card'
Vue.component('Card', Card);
//import CardShow from 'components/CardShow'
//Vue.component('CardShow', CardShow);
import VueMarkdown from 'vue-markdown';
Vue.component('VueMarkdown', VueMarkdown);
import bCard from 'bootstrap-vue/es/components/card/card';

Vue.component('b-card', bCard);
import bCardGroup from 'bootstrap-vue/es/components/card/card-group';

Vue.component('b-card-group', bCardGroup);
import { Layout } from 'bootstrap-vue/es/components';

Vue.use(Layout);
import { InputGroup } from 'bootstrap-vue/es/components';

Vue.use(InputGroup);
import { FormGroup } from 'bootstrap-vue/es/components';

Vue.use(FormGroup);
import { FormInput } from 'bootstrap-vue/es/components';

Vue.use(FormInput);
import { Button } from 'bootstrap-vue/es/components';

Vue.use(Button);
import bPagination from 'bootstrap-vue/es/components/pagination/pagination';

Vue.component('b-pagination', bPagination);



//document.addEventListener('DOMContentLoaded', () => {
let element = document.getElementById("cards-form");
    let cards = element.dataset.cards;
    let user = element.dataset.user;
    let props = element.dataset;
    console.log(props);
console.log(user);
    const app = new Vue({
        el: element,
        data:  {

                cards: JSON.parse(cards),
                current_user: JSON.parse(user),
                filterText: ''

        },

        //render: h => {'<div><Notice v-for="notice in notices" v-bind:key="notice.id">{{ notice.notice}} </Notice></div>', this.hi},
        components: {
            Card,
            VueMarkdown,
            bCard
        }
//    })
});