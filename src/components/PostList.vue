<template>
  <div class="post" v-for="post in posts1">
    <div><strong>Название: </strong>{{ post.title }} </div>
    <div><strong>Описание: </strong>{{ post.body }} </div>
  </div>
</template>
   
<script >

export default {
  props: {
    posts1: {
      type: Array,
      required: true
    }
  }

}

</script>
   
<style scoped>
.post {
  padding: 15px;
  border: 2px solid green;
  border-radius: 5px;
  margin-top: 15px;
}
</style>
   