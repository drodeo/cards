<template>

    <div>

                    <h5 class="card-header">{{ cards.title}}</h5>
                    <div class="card-body">
                        <p class="card-text"><vue-markdown> {{ cards.body}} </vue-markdown></p>


                        </div>
                    </div>



</template>




<script>
    import Vue from 'vue/dist/vue.esm'
    import CardShow from 'components/CardShow';
    Vue.component('CardShow', CardShow);
    export default {
        props: ['cards'],
    };
</script>

<style scoped>

</style>