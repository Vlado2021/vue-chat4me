<template>
    <div class="dialog" v-if="show===true"> 
        <div class="dialog__content">
            <slot>     </slot>
        </div>
    </div>
</template>
    
<script>
    export default {
     name:'my-dialog',
     props: {
         show: {
             type: Boolean,
             default: false
         }
     } 
    }
</script>
    
       
  <style scoped>
    .dialog {
        top: 0px;
        bottom: 0px;
        right: 0px;
        left: 0px;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;

    }
    
    .dialog__content {
        margin: auto;
        background: white;
        border-radius: 12px;
        min-height: 50px;
        min-width: 300px;
    }
    
  </style>