<template>  
    <div class="posts-list">
      <h2>All posts</h2>

        <div class="loading-spinner" v-if="loading">
        Loading...
        </div>

      <div class="posts-list__items">
        <post-summary 
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:postID="post.id"
            v-bind:userID="post.userId"
            v-bind:title="post.title"
            v-bind:toSummarise="post.body"
        >
        </post-summary>
      </div>
    </div>
</template>

<script>
  import PostSummary from './PostSummary';
  export default {
    name: 'post-summary-list',
    data () {
        return {
            posts: null,
            loading: null,
        }
    },
    created () {
        this.fetchData()
    },
    methods: {
        fetchData () {
        this.loading = true
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(posts => {
                this.loading = false;
                this.posts = posts;
            }
        );
        }
    },
    components: {
      'post-summary': PostSummary
    },
  }
</script>

<style scoped>
    .posts-list__items {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        left: -1em;
    }
</style>
