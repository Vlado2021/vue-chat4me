<template>
  <div class="app">
    <post-form @create="createPost3" />
    <post-list v-bind:posts="posts" />
  </div>
</template>

<script >
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
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
      ]
    }
  },
  methods: {
    createPost3(post) {
      console.log(post);
      this.posts.push(post);
    }
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


</style>
