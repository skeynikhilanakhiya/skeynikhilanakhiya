<template>
    <div class="product__card">
    <img class="product__image" :src="product.media.source" >
    <h3 class="product__name">{{ product.name }}</h3>
    <p class="product__description" v-html="product.description"></p>
    <p class="product__price">{{ product.price.formatted_with_symbol }}</p>
  </div>
  <ProductsLists :products="products" />
</template>
<script>
import ProductItems from './pditem.vue';

export default {
  name: 'ProductsList',
  components: {
    ProductItems,
  },
  props: {
  products: {
    type: Array,
    default: () => [],
  },
},
};
</script>