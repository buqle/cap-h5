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
    ]
  },
  {
    path: '/featured-insights',
    redirect:'FeaturedIns',
    component: _import_('LayOut'),
    children:[
      {
        path: '/',
        name:'FeaturedIns',
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
  {
    path: '/overview',
    component: _import_('LayOut'),
    redirect:'about',
    meta:{keepalive:true,titles:''},
    children:[
      {
        path: '/:titles',
        name:'about',
        component: _import_('AboutVerview'),
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router