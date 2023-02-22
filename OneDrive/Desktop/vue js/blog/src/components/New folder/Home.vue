<template>
    <h1>H<span style="color: blue;">o</span><span style="color:violet">m</span>e</h1>
<ul class="item" v-for="item in list" :key="item"><li>{{ item.id  }} </li><li> {{ item.email }}</li><li>{{ item.last_name }}</li><li><img :src="item.avatar" alt=""></li></ul>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Home-page',

    data(){
        return{
            list:[],
        };
    },
    async mounted(){
        let result = await axios.get("https://reqres.in/api/users?page=1")
    console.log("api call",result.data.data);
    this.list=result.data.data
    }
}

</script>
<style>
h1 {
    color: orange;
}
::selection{
    color :blue;
}
.item li{
    display: inline-block;
  border: 3px solid black;
  padding: 10px;
  margin: 1px;
  width: 170px;
}
.item img{
    display: inline-flex;
  border: 3px solid black;
  width: 50px;
   
}
.item{
    display: flex;
}
</style>