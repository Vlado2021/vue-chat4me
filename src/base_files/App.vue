<template>
  <div class="app">
    <post-form @create="createPost" />
    <post-list  v-bind:posts1="posts" />
  </div>
</template>

<script >
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', body: 'Описание поста' },
        { id: 2, title: 'JavaScript2', body: 'Описание поста2' },
        { id: 3, title: 'JavaScript3', body: 'Описание поста3' }
      ],

      
    }
  },
  methods: {
    createPost(post) {
      console.log(post);
      console.log(second);
      console.log(third);
      this.posts.push(post, second, third);
    },


  }

}

</script>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.post {
  padding: 15px;
  border: 2px solid green;
  border-radius: 5px;
  margin-top: 15px;
}

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
