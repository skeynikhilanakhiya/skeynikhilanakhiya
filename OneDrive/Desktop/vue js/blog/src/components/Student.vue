<template>
    <h2>Student name is :{{ name }}</h2>
</template>
<script>
export default {
    name:'Student-item',
    props :{
        name:String
    }
}

</script>