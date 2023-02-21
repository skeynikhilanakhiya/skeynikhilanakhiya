<template>
    <h1><span style="color:blue;">{{profile}}'</span>s P<span style="color: blue;">ro</span>fi<span style="color: tomato;">le</span></h1>
</template>
<script>
import {useRoute} from 'vue-router'
export default {
    name: 'profile-page',
data(){
return{
    profile:''
}
},
    mounted(){
        const route=useRoute();
        console.log("route",route.params.name);
        this.profile=route.params.name;
    }
}

</script>
<style>
h1 {
    color: orange;
}
</style>