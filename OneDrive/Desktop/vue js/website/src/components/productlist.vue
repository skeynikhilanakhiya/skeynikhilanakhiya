<template>
    <div class="products">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="products__item"
      />
    </div>
  </template>
  
  <script>
  import ProductItem from './productitem.vue';

  export default {
    name: 'ProductsList',
    props: {
      products: {
        type: Array,
        default: () => [],
      },
    },
    components: {
      ProductItem,
    },
  };
  </script>
<!--   
  <style lang="scss">
  .products {
    @apply block m-40;
  
    @screen md {
      @apply grid grid-cols-3 grid-rows-3; 
    }
  }
  
  </style> -->