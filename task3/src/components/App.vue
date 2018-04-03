<template>
  <div id="app" class="app">
    <h1 class="app__header">Vue posts app</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  import Router from 'vue-router'
  import PostSummary from './PostSummary';
  export default {
    name: 'app',
    components: {
      'post-summary': PostSummary
    },
  }
</script>

<style src="normalize.css/normalize.css"></style>

<style>
  html {
    background-color: #444;
    min-width: 310px;
  }
  .app {
    max-width: 1200px;
    min-height: calc(100vh - 4em);
    margin: 2em auto;
    padding: 2em;
    font-family: sans-serif;
    background-color: #f8f8f8;
    position: relative;
  }
  .app__header {
    margin-bottom: 2em;
  }

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .loaded {
    animation: appear 1 ease-in 0.2s;
  }

  .loading-spinner {
    width: 100%;
    position: relative;
    color: transparent;
    height: 50vh;
  }

  .loading-spinner:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    margin: auto;
    height: 2rem;
    width: 2rem;
    border: 4px solid #888;
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: spinner infinite linear 1s;
  }
</style>

