export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        name: '首页',
        component: resolve => require (['views/home/PageHome.vue'], resolve),
        meta: {
          title: '首页'
        }
    },
    {
        path: '/login',
        name: '登录',
        component: resolve => require (['views/login/Login.vue'], resolve),
	    meta: {
		    title: '登录页面'
	    }
    },
    {
        path: '*',
        redirect: '/'
    }
]
