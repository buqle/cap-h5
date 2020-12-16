import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const _import_=file=>()=>import('@/views/' + file + '.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/',
    meta:{keepalive:true},
    component: _import_('LayOut'),
    children:[
      {
        path:'/',
        meta:{keepalive:true},
        component: _import_('Home'),
      },
      {
        path: 'press-release',
        name:'PressView',
        component: _import_('PressView'),
      },
      {
        path: 'careers',
        component: _import_('CaressView'),
      },
      {
        path: 'overview',
        component: _import_('AboutVerview'),
      },
      {
        path: 'overview',
        component: _import_('AboutVerview'),
      },
      {
        path: 'contact',
        component: _import_('AboutContact'),
      }


    ]
  },
  {
    path: '/featured-insights',
    redirect:'FeaturedIns',
    component: _import_('LayOut'),
    meta:{keepalive:true},
    children:[
      {
        path: '/',
        name:'FeaturedIns',
        meta:{keepalive:true},
        component: _import_('FeaturedIns'),
      },
    ]
  },
  {
    path: '/featured-list',
    component: _import_('LayOut'),
    redirect:'featuredList',
    children:[
      {
        path: '/:tit',
        name:'featuredList',
        meta:{keepalive:true},
        component: _import_('FeaturedList'),

      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
