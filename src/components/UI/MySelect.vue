<template>
    <select > 
        <option disabled value="">Выбирите из списка</option>
       
    </select>  
  </template>
    
  <script>
    export default {
     name:'my-select',
     emits: ['update:modalValue'],
     props:{
        modelValue:{
            type:String
        },
        options:{
            type: Array,
            default: ()=>{}
        }
     },
     methods:{
        changeOption(option){
            this.$emit('update:modalValue', option)
        }
     } 
    }
  </script>
    
       
  <style scoped>
     
    
  </style>