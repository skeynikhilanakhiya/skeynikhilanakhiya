<template>
<h2 ref="un">unmounted & unmount</h2>
</template>
<script>
export default{
    name:'un-',
    beforeUnmount(){
        console.log("beforunmount",this.$refs['un']);

    },
    unmounted(){
        console.log("unmounted",this.$refs['un']);

    }
}

</script>