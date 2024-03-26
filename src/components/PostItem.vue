<template>
    <div class="post" >
      <div>
      <div>{{ post5.id }}</div>
      <div><strong>Название: </strong>{{ post5.title }} </div>
      <div><strong>Описание: </strong>{{ post5.body }} </div>
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`/posts/${post5.id}`)" >Открыть</my-button>  
      <my-button @click="$emit('remove', post)" >Удалить</my-button>  
    </div>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .post__btns{
    display: flex;
  }
  </style>
