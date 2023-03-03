<template>
    
<Header />
<Section />
<productcategory />
<mains />
<shop />
<blog />
<servi />
<foot />
</template>

<script>
import Header from './components/Header.vue'
import Section from './components/Section.vue'
import productcategory from './components/productcategory.vue'
import mains from './components/main.vue'
import shop from './components/Shophome.vue'
import blog from './components/Blog.vue'
import servi from './components/Services.vue'
import foot from './components/Footer.vue'

export default {
    name: 'App',
    components: {
        Header,
        Section,
        productcategory,
        mains,
        shop,
        blog,
        servi,
        foot
    },
  


}

</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
::selection{
    color:rgb(236, 25, 219);
}
</style>
