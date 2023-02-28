<template>

<div class="products">
    <ProductItems
      v-for="product in products"
      :key="product.id"
      :product="product"
      class="products__item"
    />
  </div>
</template>
<script> 

import ProductsLists from './pd.vue';

export default {
  name: 'app',
  components: {
    ProductsLists,
  },
  data() {
    return {
      products: [],
    }
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    /**
     * Fetch products data from Chec and stores in the products data object.
     * https://commercejs.com/docs/sdk/products
     */
    fetchProducts() {
      this.$commerce.products.list().then((products) => {
        this.products = products.data;
      }).catch((error) => {
        console.log('There is an error fetching products', error);
      });
    },
  },
};
</script>