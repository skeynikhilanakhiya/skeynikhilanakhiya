<template>

<h2>User  </h2>
<button v-on:click="getUser(userName)">Send user Name to parent </button>
</template>
<script>
export default{
    name:'user-',
    data(){
        return{
            userName:"nikhil"
        }
    },
    props:{
        getUser:Function
    }
}

</script>
<style scoped>
h2{
    color:rgb(61, 2, 2);
}
</style>