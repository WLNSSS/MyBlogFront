import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import BlogIndex from '@/components/BlogIndex'
import Register from '@/components/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
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
    }
  ]
})
