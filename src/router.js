import vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

vue.use(Router)


const router=new Router({
    routes:[
        {
            path:'/',
            redirect:'/index'
        },
        {
            path:'/',
            name:'home',
            component:Home,
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:()=>import("./views/index/Index.vue"),
                    children:[                       //index下面的子路由
                        {
                            path:'/index',
                            name: 'index',
                            component:()=>import("./components/index/VideoList.vue")   
                        }
                    ]
                },
                {
                    path:'/follow',
                    name:'follow',
                    component:()=>import("./views/follow/Follow.vue")
                }
            ]
        }
    ]
})

export default router

