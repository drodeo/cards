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




let element = document.getElementById("cards-form");
    let cards = element.dataset.cards;
    let props = element.dataset;
    console.log(typeof(cards));
    console.log(props);
    console.log(JSON.parse(cards));
    var tmp = JSON.parse(cards);
    console.log(tmp);

    const app = new Vue({
        el: element,
        data: function() {
            return {
                cards: JSON.parse(cards)
            }
        },

        //render: h => {'<div><Notice v-for="notice in notices" v-bind:key="notice.id">{{ notice.notice}} </Notice></div>', this.hi},
        components: {
            Card,
            VueMarkdown,
            bCard
        }
    });
