<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input v-model="post.title" class="input" type="text" placeholder="Название">
    <input v-model="post.body" class="input" type="text" placeholder="Описание">
    <my-button  style="align-self: flex-end; margin-top: 10px " v-on:click="createPost2">Создать</my-button>
  </form>
</template>

<script>
import MyButton from  "@/components/UI/MyButton.vue";
export default {
  components: {
    MyButton
  },
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
.input {
  width: 100%;
  border: 2px solid green;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 15px;
}


</style>
   
