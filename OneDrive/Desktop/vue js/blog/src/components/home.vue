<template>
<h2 class="abc"> Reuse component</h2>
<user />
<ul>
    <li v-for="item in users" :key="item.name">
        {{ item.name }}
        {{item.email }}
    </li>
</ul>
</template>

<script>
import user from './user.vue'
export default {
    name: 'Home-item',
    components: {
        user

    },
    data() {
        return {
            users: [{
                    name: 'nik',
                    email: 'nik@test.com'
                },
                {
                    name: 'nikh',
                    email: 'nikh@test.com'
                },

                {
                    name: 'niki',
                    email: 'niki@test.com'
                },

                {
                    name: 'nikl',
                    email: 'nikl@test.com'
                }

            ]
        }
    }

}
</script>

<style scoped>
h2 {
    color: rgb(127, 138, 255);
}li{

    background-color: aqua;
    position: relative;
    padding: 20px;
    text-decoration: none;
    padding-left: 10px;
    margin-left: 20px;
    display: initial;
    border: 2px solid black;
    font-family: monospace;
    border-bottom: 3px solid black;
}
</style>
