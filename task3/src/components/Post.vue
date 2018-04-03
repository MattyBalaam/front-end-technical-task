<template>
  <div class="post">
    <router-link to="/posts">'Vue' all posts</router-link>
    <div class="loading-spinner" v-if="loading">
      Loading...
    </div>
    <div v-if="body" class="post__content loaded"> 
        <h2>{{title}}</h2>
        <p>{{body}}</p>
        <p>userID: {{userID}}</p>
        <comments></comments>
    </div>
  </div>
</template>

<script>

import Comments from './Comments';

export default {
    name: 'post',
    data () {
        return {
            userID: null,
            title: null,
            body: null,
        }
    },
    created () {
        this.fetchData()
    },
    methods: {
        fetchData () {
            this.loading = true
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                .then(response => response.json())
                .then(post=>{
                this.title = post.title;
                this.body = post.body;
                this.userID = post.userId;
                this.loading = false
                }
            );
        }
    },
    components: {
      'comments': Comments
    },
}
</script>


<style>

</style>

<style scoped>
  .post {
    width: 100%;
  }
</style>
