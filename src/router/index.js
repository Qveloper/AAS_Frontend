import Vue from 'vue';
import Router from 'vue-router';
import Console from '@/components/Console';
// import ProgressBar from 'vuejs-progress-bar';
import 'vue-progress-path/dist/vue-progress-path.css';
import VueProgress from 'vue-progress-path';

Vue.use(Router);
// Vue.use(ProgressBar);
Vue.use(VueProgress);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Console',
      component: Console,
    },
  ],
});
