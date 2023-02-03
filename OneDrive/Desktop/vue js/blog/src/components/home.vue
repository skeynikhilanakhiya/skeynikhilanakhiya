<template>
<h1>Email : {{email }}</h1>
<h1>Mobile :{{mobile }}</h1>
<h1>Mobile: {{mobile==8888 }}</h1>
<h1>Name :{{"Nikhil" }}</h1>
<h1>Name :{{getName("nikhil a") }}</h1>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            email: 'nikhil@test.com',
            mobile: 90999,
            getName: function (a) {
                return a;

            },
            methods: {
                getName(name) {
                    return name;
                }
            }
        }
    }
}
</script>

<style scoped>
/* h1{
    color: rgb(127, 138, 255) ;
} */
</style>
