<template>
    <div class="post" >
      <div><strong>Название: </strong>{{ post5.title }} </div>
      <div><strong>Описание: </strong>{{ post5.body }} </div>
    </div>
  </template>
     
  <script >
  
  export default {
  
    props: {
      post5: {
        type: Object,
        required: true
      }
    }
  
  }
  
  </script>
     
  <style scoped>
  .post {
    padding: 15px;
    border: 2px solid green;
    border-radius: 5px;
    margin-top: 15px;
  }
  </style>./Postitem.vue