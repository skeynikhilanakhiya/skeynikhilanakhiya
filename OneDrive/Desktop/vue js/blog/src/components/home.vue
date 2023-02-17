<template>
    <h2>Simple Form</h2>
    <p>{{ form }}</p>
    <form>
        <label for="email">Email :</label>
        <input type="email" placeholder="Email" v-model="form.email"><br><br>
        <label for="Password">Password :</label>
        <input type="Password" placeholder="Password" v-model="form.password"><br><br>
        <select v-model="form.country">
            <option>India</option>
            <option>USA</option>
            <option>Rassia</option>
        </select><br>
        <h2>Gender</h2>
        <label for="male">Male :</label>
        <input type="radio" name="gender" value="male" v-model="form.gender"><br><br>
        <label for="Fe male">Fe-Male :</label>
        <input type="radio" name="gender" value="fe-male" v-model="form.gender"><br><br>
        <h2>Technology</h2>
        <label>PHP :</label>
        <input type="checkbox" value='Php' v-model="form.technology"><br><br>
        <label>Java :</label>
        <input type="checkbox" value='Java' v-model="form.technology"><br><br>
        <button type="button" v-on:click="login">Login</button>

    </form>
</template>

<script>
export default {
    name: 'Home-',
    data() {
        return {
            form: {
                email: '',
                password: '',
                country: '',
                gender: '',
                technology: []
            }
        }
    },
    methods: {
        login() {
            console.log(this.form)
        }
    }
}
</script>
<style scoped>
h2 {
    color: lawngreen;
}

label {
    margin: 10px;

}

button {
    margin: 10px;
}
</style>