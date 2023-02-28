<template>
<div class="product-area section">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title">
                    <h2>Trending Item</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="product-info">
                    <div class="nav-main">
                        <!-- Tab Nav -->
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item"><a class="nav-link " data-toggle="tab" href="#man" role="tab" v-on:click="fatchdata(title)">Man</a></li>
                            <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#women" role="tab" v-on:click="fatchdata('women')">Women</a></li>
                            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#kids" role="tab" v-on:click="fatchdata('kid')">Kids</a>
                            </li>
                            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#accessories" role="tab" v-on:click="fatchdata('Accessories')">Accessories</a></li>
                            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#essential" role="tab" v-on:click="fatchdata('Essential')">Essential</a></li>

                        </ul>
                        <!--/ End Tab Nav -->

                        <!--/ End Tab Nav -->
                    </div>
                    <div class="row">

                        <productitem v-for="i in 8" :key="'men' + i" :product="{ title: 'men',}" />

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<productitem class="display" v-for="product in products" :key="product.title" :product="product" />
</template>

<script>
import productitem from "./product.vue"

export default {
    name: "Section-",

    components: {
        productitem
    },
    data() {
        return {

            products: [

                {
                    title: 'women',
                    color: 'blue',
                    src: require('../assets/image/women.jpg')
                },
                {
                    title: 'kid',
                    color: 'red',
                    src: require('../assets/image/kid.jpg')

                },
                {
                    title: 'Accessories',
                    color: 'yellow',
                    src: require('../assets/image/women.jpg')
                },
                {
                    title: 'Essential',
                    color: 'white',
                    src: require('../assets/image/women.jpg')

                },

            ]
        }
    },
    methods: {
        fatchdata(title) {
            this.products = this.products.filter(product => product.title === title);
        },
        
    }

}
</script>

<style scoped>
.display {
    display: block;

}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -32px;
}
</style>
