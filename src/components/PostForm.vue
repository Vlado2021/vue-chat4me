<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input v-bind:value="post.title" @input="post.title = $event.target.value;" class="input" type="text"
      placeholder="Название">
    <input v-bind:value="post.body" @input="post.body = $event.target.value;" class="input" type="text"
      placeholder="Описание">
    <button class="btn" v-on:click="createPost">Создать</button>
  </form>
</template>
   
<script >
export default {
  data() {
    return {
      post: {
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
   