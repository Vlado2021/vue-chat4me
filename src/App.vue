<template>
  <div  class="app">
    <h1>Страница с постами</h1>
    <my-button  @click="fetchPosts">Получить посты</my-button>
    <my-button style="margin: 25px 0;" @click="showDialog">Создать пост</my-button>
    <my-dialog   v-model:show="dialogVisible">
      <post-form @create="createPost3" />
    </my-dialog>
    
    <post-list @remove="removePost"  v-bind:posts="posts" />
  </div>
</template>

<script >
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";

export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [
        
      ],
      dialogVisible: false,
    }
  },
  methods: {
    createPost3(post) {
      console.log(post);
      this.posts.push(post);
      this.dialogVisible= false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog(){
      this.dialogVisible= true
    },
    async fetchPosts () {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts=response.data;
        console.log(response);
      } catch (error) {
        alert ('Ошибка')
      }
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


</style>
