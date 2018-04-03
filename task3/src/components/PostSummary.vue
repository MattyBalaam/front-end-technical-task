<template>
    <router-link :to="{path: `/posts/${postID}`}" class="post-summary loaded">
      <h3>{{title}}</h3>
      <p>{{summary}}&hellip;</p>

      <p>userID: {{userID}}</p>
      <p>postID: {{postID}}</p>
      <p class="post-summary__view-more">'Vue' full post -> </p>
    </router-link>
</template>

<script>
  const summarise = text => text.split(' ').map((val,i) => i < 10 ? val : null ).join(' ');
  export default {
    name: 'post-summary',
    props: [
      'postID',
      'userID',
      'title',
      'toSummarise'
    ],
    computed: {
      summary: function() { return summarise(this.toSummarise)}
    }
  }
</script>


<style>

</style>

<style scoped>
  .post-summary {
    margin: 1em;
    flex: 0.2 0 300px;
    border: 1px solid #333;
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  .post-summary:hover {
    background: #eee;
  }
  .post-summary > * {
    padding: 1em;
    margin: 0;
  }
  .post-summary__view-more {
    margin-top: auto;
    margin-bottom: 0;
    color: white;
    text-align: right;
    background: #66a;
  }
  .post-summary:hover .post-summary__view-more {
    background: #88b;
  }
</style>
