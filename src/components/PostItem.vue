<template>
    <div class="post" >
      <div>
      <div><strong>Название: </strong>{{ post5.title }} </div>
      <div><strong>Описание: </strong>{{ post5.body }} </div>
    </div>
    <div class="post__btn"> 
      <my-button >Удалить</my-button>  
    </div>
    </div>
  </template>
     
  <script >
  import MyButton from  "@/components/UI/MyButton.vue";
  export default {
    components: {
        MyButton
                },
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
  </style>
