<template>

<div>
    <h3>Hang</h3>
    <h3>Captian</h3>
    <h3>Spidy</h3>
    <h3 v-bind="$attrs">{{ item }}</h3>


</div>

</template>
<script>

export default{
    name:"user-",
inheritAttrs:false
}
</script>