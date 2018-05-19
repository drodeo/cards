<template>

    <div>

        <br>
        <div class="container">
            <b-row>
            <b-col md="6" class="my-1">
                <b-form-group horizontal label="Filter" class="mb-0">
                    <b-input-group>
                        <b-form-input v-model="filter" placeholder="Type to Search" />
                        <b-input-group-append>
                            <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
                        </b-input-group-append>
                    </b-input-group>
                </b-form-group>

            </b-col>
                <div md="6" class="my-1">
                <b-pagination align="right" :total-rows="cards.length"
                              v-model="currentPage" :per-page="12">
                </b-pagination>
                <br>
                </div>
            </b-row>


            <div class="row">
                <b-card-group  class="col-md-4  mt-4" id="b-card" v-for="card in cards"
                     v-bind:key="card.id " @click="gotoBodyLink"
                               :filter="filter"
                               @filtered="onFiltered"
                               :current-page="currentPage">
                    <b-card border-variant="primary" id="card">
                    <span> {{ bodyCut }} </span>
                        <h6 class="card-header">{{ card.title}}</h6>
                        <div class="card-body">
                            <p class="card-text">
                                <vue-markdown> {{ card.body}}</vue-markdown>
                            </p>

                            <a :href="'/cards/' + card.id" class="btn btn-default">Read more...</a>
                            <div class="card-footer">
                                <b-row>
                                    <h6 class="text-left">{{ card.topic.title }}</h6>
                                    <div class="text-right">
                                        <a :href="'/cards/' + card.id+'/edit'" class="card-link"><i class="material-icons">edit</i></a>
                                        <a :href="'/cards/' + card.id+',delete'" class="card-link"><i class="material-icons">delete</i></a>
                                    </div>
                                </b-row>
                            </div>
                        </div>


                    </b-card>
                </b-card-group>

            </div>
            <div md="6" class="my-1">
                <b-pagination align="right" :total-rows="cards.length"
                              v-model="currentPage" :per-page="12">
                </b-pagination>
                <br>
            </div>
        </div>

    </div>
</template>




<script>
    export default {
        props: ['cards'],
        data () {
            return {
                filter: null,
                        currentPage: 1
                    }
        },
        computed: {
            bodyCut: function() {
                let total = '';
                for(let i = 0; i < this.cards.length; i++){
                    this.cards[i].body = this.cards[i].body.length>200 ? this.cards[i].body.slice(0, 200)+'...' :this.cards[i].body;
                    console.log(this.cards[i].body);
                   // console.log(this.cards[i].tags);
                }
                return this.cards.body;
            }
        },
        methods: {
            onFiltered (filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length,
                console.log(this.totalRows),
                this.currentPage = 1
            },
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
    .card {
        background: white;
        text-decoration: none;
        color: #444;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    /*!* On mouse-over, add a deeper shadow *!*/
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    /*!* Add some padding inside the card container *!*/
    .container {
        padding: 2px 16px;
    }
    .row {
        padding: 20px;
    }

    /*!* typography *!*/
    .card h6 {
        font-size: 20px;
        margin: 0;
        color: #333;
    }

    .card p {
        line-height: 1.4;
    }

    .card span {
        font-size: 12px;
        font-weight: bold;
        color: #999;
        text-transform: uppercase;
        letter-spacing: .05em;
        margin: 2em 0 0 0;
    }
</style>