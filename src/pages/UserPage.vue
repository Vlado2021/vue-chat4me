<template>
    <div  >
      <h1>Страница с постами</h1>
      <my-input 
      v-model="searchQuery"
      placeholder="Поиск..."
      />
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
      v-bind:posts="sortedAndSearchedPosts" 
      v-if="!isPostloading"
      />
      <div v-else>Идет загрузка....</div>
      <div ref="observer" class="observer"></div>
      <!--  этот блок кода для пагинации через watch: this.fetchPost -->
      <!-- <div class="page__wrapper">
        <div 
        v-for="pageNumber in totalPages" 
        :key="pageNumber"
        class="page"
        :class="{'current-page': pageNumber===page}"
        @click="changePage(pageNumber)"
        >
        {{ pageNumber }}
        </div>
      </div> -->
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
        selectedSort: '',
        searchQuery:'',
        page: 1,
        limit: 10,
        totalPages:0,
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
      // этот блок кода для пагинации через watch: this.fetchPost
      //changePage(pageNumber){
      //  this.page=pageNumber;
      //},
      async loadMorePosts () {
        try {
            this.page += 1;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
              params: {
                _page: this.page,
                _limit: this.limit
              }
            });
            this.totalPages=Math.ceil(response.headers['x-total-count']/this.limit)
            this.posts = [...this.posts, ...response.data];
                          
        } catch (error) {
          alert ('Ошибка')
        } finally {
         
        }
  
        
      },
  
      async fetchPosts () {
        try {
            this.isPostloading = true;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
              params: {
                _page: this.page,
                _limit: this.limit
              }
            });
            this.totalPages=Math.ceil(response.headers['x-total-count']/this.limit)
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
      console.log(this.$refs.observer);
      var options={
        rootMargin:'0px',
        threshold: 1.0
      }
      var callback=(entries, observer) => {
        if(entries[0].isIntersecting && this.page<this.totalPages) {
          this.loadMorePosts()
        };
      }
      var observer=new IntersectionObserver(callback, options)
      observer.observe(this.$refs.observer)
    },
    computed:{
      sortedPosts(){
        return [...this.posts.sort((post1,post2)=>post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))]
      },
      sortedAndSearchedPosts() {
        return this.sortedPosts.filter(post=>post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
     },
    watch: {
      // этот блок кода для пагинации через watch: this.fetchPost
      // page(){
      //   this.fetchPosts()
      // }
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
  .page__wrapper{
   display: flex;
   margin-top: 15px;
  }
  .post{
    border: 1px solid black;
    padding: 10px;
  }
  .current-page{
    border: 2px solid green;
  }
  
  .observer{
    height: 30px;
    background:rgb(185, 255, 185);
  }
  </style>
  