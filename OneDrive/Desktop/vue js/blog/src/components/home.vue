<template>
<h2> Pass Data To Child Components</h2>
<Child></Child>
</template>

<script>
import Child from './Child.vue'
export default {
    name: 'app',
    components : {
        Child
    }

}
</script>

<style scoped>
h2 {
    color: rgb(127, 138, 255);
}
</style>
