<template>  
    <div class="comments-list">
      <h3>Comments for this post</h3>
      <div class="comments-list__items">
        <div class="comment loaded"
            v-for="comment in comments"
            v-bind:key="comment.id"
        >
        <h4>{{comment.name}} says:</h4>
        <p>{{comment.body}}</p>
        <p>{{comment.email}}</p>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'comments',
    data () {
        return {
            comments: null,
        }
    },
    created () {
        this.fetchData()
    },
    methods: {
        fetchData () {
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}/comments`)
                .then(response => response.json())
                .then(comments => {
                    this.comments = comments;
                }
            );
        }
    },
  }
</script>

<!-- Global CSS -->
<style>

</style>

<style scoped>
    .comments-list {
        padding-top: 2em;
    }
    .comments-list__items {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        position: relative;
    }
    .comment:not(:first-of-type){
        border-top: 1px solid #666;
    }

</style>
