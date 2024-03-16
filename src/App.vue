<template>
  <div  class="app">
    <h1>Страница с постами</h1>
    <div class="app__btns">
      <my-button  @click="showDialog">Создать пост</my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    
    <my-dialog   v-model:show="dialogVisible">
      <post-form @create="createPost3" />
    </my-dialog>
    
    <post-list 
    @remove="removePost"  
    v-bind:posts="posts" 
    v-if="!isPostloading"
    />
    <div v-else>Идет загрузка....</div>
  </div>
</template>

<script >
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";

export default {
  components: {
    MySelect, MyButton, PostForm, PostList
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostloading: false,
      selectedSort:'',
      sortOptions:[
        {value:'title', name:'По названию'},
        {value:'body', name:'По содержимому'}
      ]
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
          this.isPostloading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = response.data;
                        
      } catch (error) {
        alert ('Ошибка')
      } finally {
        this.isPostloading = false;
      }
    },
    
  },
  mounted() {
      this.fetchPosts();
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

.app__btns {
  margin:15px;
  display:flex;
  justify-content:space-between;
}

</style>
