<template>
  <button class="btn"> <slot></slot>

  </button>  
</template>
  
<script>
  export default {
   name:'my-button'
    
  }
</script>
  
     
<style scoped>
  .btn {
  padding: 10px 15px;
  border: 2px solid green;
  border-radius: 5px;
  background-color: rgb(155, 219, 155);
}
  
  
</style>