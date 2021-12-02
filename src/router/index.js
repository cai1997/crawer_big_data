import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
const router = new Router({
    routes:[
        {
			path:'/',
			name:'index',
			component: ()=>import('@/view/index.vue')
		}
    ]
})

router.afterEach((to, from, next) => {
	window.scrollTo(0,0)
});
export default router