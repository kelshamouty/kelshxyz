const c1 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/home/kelsh/kelshxyz/src/pages/Blog.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/home/kelsh/kelshxyz/src/templates/BlogPost.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--success-vue" */ "/home/kelsh/kelshxyz/src/pages/Success.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/home/kelsh/kelshxyz/src/pages/Contact.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/kelsh/kelshxyz/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/home/kelsh/kelshxyz/src/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/kelsh/kelshxyz/src/pages/Index.vue")

export default [
  {
    path: "/blog/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/blog/:title/",
    component: c2
  },
  {
    path: "/success/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
