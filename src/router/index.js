import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import BlogIndex from '@/components/BlogIndex'
import Register from '@/components/Register'
import NewPaper from '@/components/NewPaper'
import tinymceEditor from '@/components/tinymceEditor'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/BlogIndex',
      name: 'BlogIndex',
      component: BlogIndex
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/NewPaper',
      name: 'NewPaper',
      component: NewPaper
    },
    {
      path: '/tinymceEditor',
      name: 'tinymceEditor',
      component: tinymceEditor
    },
  ]
})
