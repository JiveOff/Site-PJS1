import Vue from 'vue'
import Router from 'vue-router'
import VueToastr from "vue-toastr"
import Vuex from 'vuex'

import VueShowdown from 'vue-showdown'

import App from '@/App'
import Accueil from '@/components/Accueil'
import Article from '@/components/Article'
import NotFound from '@/components/404'

Vue.config.productionTip = false

import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)
Vue.use(Router)
Vue.use(VueToastr)
Vue.use(Vuex)
Vue.use(VueShowdown, {
  flavor: 'github',
})

import Background from '@/images/bg.gif'

const store = new Vuex.Store({
  state: {
    background: Background,
    backgroundAfter: null
  }
})

let siteProperties = {
  nomSite: "La réalité virtuelle"
}

let routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
    props: {
      siteProperties
    }
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article,
    props: {
      siteProperties
    }
  },
  { path: "*", component: NotFound }
]

const router = new Router({
  routes,
  mode: 'history'
});

new Vue({
  router,
  store: store,
  render: createElement => {
    const context = {
      props: { siteProperties },
    };
    return createElement(App, context);
  }
}).$mount('#app');