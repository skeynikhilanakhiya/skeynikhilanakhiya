<template>
<h2 class="StaticClass" :class="adstyle"> HTML Binding</h2>
<h2 class="StaticClass" :class="adstyle"> HTML Binding</h2>

<button v-on:click="coler=!coler">apply</button>
<button v-on:click="coler=!colap">apply</button>


</template>

<script>
export default {
    name: 'Home-item',
    data() {
        return {
            coler: true,
            colap:false

        }
    },
    computed :{
        adstyle(){

            return{
                green:this.coler,
                err:true
            }
        }
    }

}
</script>

<style scoped>
h2 {
    color: rgb(127, 138, 255);
    text-align: center;
}

.green {
    background-color: rgb(248, 135, 115);
    color: #fff;
    padding: 10px;
    border: 3px solid rgb(11, 9, 9);
    width: 200px;
    text-align: center;

}

.green:hover {
    background-color: rgb(251, 139, 139);
}
.err{
    font-family: monospace;
    color: rgb(26, 22, 22);
}
.gree {
    background-color: rgb(248, 135, 115);
    color: #fff;
    padding: 10px;
    border: 3px solid rgb(11, 9, 9);
    width: 200px;
    text-align: center;

}

.gree:hover {
    background-color: rgb(251, 139, 139);
}
.err{
    font-family: monospace;
    color: rgb(26, 22, 22);
}
</style>
