<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input v-model="post.title" class="input" type="text" placeholder="Название">
    <input v-model="post.body" class="input" type="text" placeholder="Описание">
    <button class="btn" v-on:click="createPost">Создать</button>
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
  metods:{
    createPost(){
      
      this.post.id=Date.now();
      this.emit('create', this.post, 'second param', '333');
      this.post={
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

.btn {
  margin-top: 10px;
  padding: 10px 15px;
  align-self: flex-end;
  border: 2px solid green;
  border-radius: 5px;
  background-color: rgb(155, 219, 155);
}
</style>
   
