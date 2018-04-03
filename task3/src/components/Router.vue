<script>

import Vue from 'vue'
import Router from 'vue-router'

import Home from './Home';
import PostSummaryList from './PostSummaryList';
import Post from './Post';


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        }, {
            path: '/posts',
            name: 'posts',
            component: PostSummaryList,
        }, {
            path: '/posts/:id',
            component: Post,
        }
    ]
});

</script>