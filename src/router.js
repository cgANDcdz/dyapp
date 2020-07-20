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
        },
        {
            path:'/sign',
            name:"sign",
            component:()=> import("./views/Sign.vue")
        },
        {
            path:'/tplogin',
            name:"tplogin",
            component:()=> import("./views/TelPswdLogin.vue")
        },
        {
            path:'/checkCode',
            name:"checkCode",
            component:()=> import("./views/CheckCode.vue")
        }
    ]
})

export default router

