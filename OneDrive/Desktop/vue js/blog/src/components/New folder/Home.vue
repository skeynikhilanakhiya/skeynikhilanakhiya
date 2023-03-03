
<template>

    <h2>Input-field values</h2>
<input type="email" placeholder="email" v-model="email" required><br><br>
<input type="password" placeholder="password" v-model="password" required><br><br>
<button v-on:click="get()" type="button">Get field values</button> 

</template>







<!-- input-field value -->


<script>
export default {
    name: 'input_field_value',
    data() {
        return {
            email: null,
            password: null,
        }
    },
    methods: {
        get() {
            console.log("value :", this.email, this.password)
        }
    }
}
</script>
