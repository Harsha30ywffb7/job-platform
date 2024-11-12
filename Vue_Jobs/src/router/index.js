import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import JobView from "@/views/JobView.vue";
import NotfoundView from "@/views/NotfoundView.vue";
import AddjobView from "@/views/AddjobView.vue";
import EditjobView from "@/views/EditjobView.vue";


const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomeView
        },
        {
            path:'/jobs',
            name:'jobs',
            component:JobsView
        },
        {
            path:'/:catchAll(.*)',
            name:'errorpage',
            component:NotfoundView
        },
        {
            path:'/jobs/:id',
            name:'job',
            component:JobView
        },
        {
            path:'/jobs/add',
            name:'add job',
            component:AddjobView
        },
        {
            path:'/jobs/edit/:id',
            name:'edit-job',
            component: EditjobView
        }
    ]
})

export default router