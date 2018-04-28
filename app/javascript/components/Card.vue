<template>

    <div>
        <br>
        <div class="row" >
            <div class="col-sm-3" v-for="card in cards"
                 v-bind:key="card.id " @click="gotoBodyLink">
                <div class="card">
                    <h5 class="card-header">{{ card.title}}</h5>
                    <div class="card-body">
                        <p class="card-text"><vue-markdown> {{ card.body}}) </vue-markdown></p>
                            <a :href="'/cards/' + card.id" class="btn btn-default">Read more...</a>

                        </div>
                    </div>
                </div>

        </div>
    </div>

</template>




<script>
    export default {
        props: ['cards'],
        methods: {
            gotoBodyLink: function (event) {
                const evt = event.added || event.moved
                if (evt == undefined) {
                    return
                }

                const element = evt.element
                const list_index = window.store.state.lists.findIndex((list) => {
                    return list.cards.find((card) => {
                        return card.id === element.id
                    })
                })
            }

        }
    }
</script>

<style scoped>
 div.card {
     height:100px;
     min-height: 100px;
 }
</style>