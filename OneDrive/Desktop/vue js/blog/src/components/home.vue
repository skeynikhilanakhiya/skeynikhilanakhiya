<template>
<h2>Teleport Components</h2>
<button v-on:click="get()">click me  </button>
<h2>Hello world of the bst persone you the most popular persone in the world.</h2>
 <p>hello guys you  are he most persone in the world in components</p>
<Teleport to="#footer">
    <footer1 />
</Teleport>

</template>
<script>
import footer1 from './footer.vue'
export default{
    name:'home-',
  components:{
    footer1
  },
  methods : {
    get(){
      alert("hi , you are the most helpfull persone in the world ")
    }
  }
 
}

</script>