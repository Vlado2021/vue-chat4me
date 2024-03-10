<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input v-model="post.title"  type="text" placeholder="Название"/>
    <my-input v-model="post.body"  type="text" placeholder="Описание"/>
    <my-button  style="align-self: flex-end; margin-top: 10px " v-on:click="createPost2">Создать</my-button>
  </form>
</template>

<script>

export default {

  emits: ['create'],
  data() {
    return {
      post: {
        title: ' ',
        body: ' '
      }
    }
  },
  methods:{
    createPost2(){
      this.post.id = Date.now();
      this.$emit('create', this.post, 'second param', '333');
      this.post = {
        title: ' ',
        body: ' '
      }
    }
  }
}
</script>

   
<style scoped>


</style>
   
