<template>
<h2>Teleport Components</h2>
<button v-on:click="get()">click me  </button>
<p>Hello Guys you are the most help[ full persone in the my programming life ]</p>
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