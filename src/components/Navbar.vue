<template>
    <div class="navbar">
        <div style="cursor: pointer"  @click="$router.push('/')" >Vue 3</div>
            <div class="navbar__btn">
                <my-button style="cursor: pointer" @click="$router.push('/posts')">Посты</my-button>
                <my-button style="margin-left: 10px;  cursor: pointer" @click="$router.push('/about')" > О нас</my-button>
                <my-button style="margin-left: 10px;  cursor: pointer" @click="$router.push('/store')" > Store</my-button>
            </div>
       
    </div>
    </template>
    
    <script>
        export default {
     
      
    }
    </script>
    
       
    <style scoped>
    .navbar {
        height: 50px;
        background-color: rgb(2, 162, 74);
        box-shadow: 2px 2px 4px grey;
        display: flex;
        align-items: center;
        padding: 0 15px;
    }

    .navbar__btn {
        margin-left: auto;
    }
    
    </style>