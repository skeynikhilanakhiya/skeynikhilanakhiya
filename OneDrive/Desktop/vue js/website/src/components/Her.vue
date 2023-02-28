<template>
    <div class="hero">
      <div class="hero__text">
        <router-link to="/">
          <h1>
            {{ merchant.business_name }}
          </h1>
        </router-link>
      </div>
    </div>
  </template>
  
  <script> 
  export default {
    name: 'Hero-',
    props: ['merchant']
  }
  </script>
  