<template>
<h2>{{ name }}</h2>
<h2>{{ user.name }}</h2>
<button v-on:click="getata()">click me</button>
</template>

<script>
export default {
    name: 'Child-item',
    props: {
        name: String,
        user: Object,
        getata:Function

    }
}
</script>
