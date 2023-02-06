<template>
<!-- <h1>Email : {{email }}</h1> -->
<!-- <h1>Mobile :{{mobile }}</h1> -->

<h1 v-on:mouseenter="mouse()">home</h1>
<button v-on:click="getData('Button click 1')">click me</button>
<button v-on:dblclick="getData('Button  double  click ')">click me</button>
</template>

<script>
export default {
    name: 'app',

    methods: {
        getData(Data) {
            alert(Data);
        }
    },
    mouse() {
       console.warn("hello");
    }
}
</script>

<style scoped>
/* h1{
    color: rgb(127, 138, 255) ;
} */
</style>
