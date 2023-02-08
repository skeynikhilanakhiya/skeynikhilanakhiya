<template>
<h2 v-if="show">If Else condition</h2>
<h2 v-else> else condition </h2>

<br>
</template>

<!-- POST METOD API -->

<script>
export default {
    name: 'app',
    data() {
        return {
            show: false

        }
    }
}
</script>

<style scoped>
h2 {
    color: rgb(127, 138, 255);
}
</style>
