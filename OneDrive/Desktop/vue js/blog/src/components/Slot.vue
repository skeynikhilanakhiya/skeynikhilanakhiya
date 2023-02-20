<template>
<div>
<header>

    <slot name="header">default</slot>
</header>
<content>
    <slot name="main">
default
    </slot>
</content> 
<footer>

    <slot name="footer">
default
    </slot>
</footer>   
</div>
</template>
<script>
export default{
    name:"solt-",
   
}
</script>
<style scoped>
div{
  border: 2px solid black;
  width: 130px;
  padding: 10px;
  margin: 10px;
  text-align: center;
}

</style>