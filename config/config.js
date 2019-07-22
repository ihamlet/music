export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
        }]
    ],
    theme:{
        'brand-primary':'#FFC414',
        'brand-primary-tap':'#ffbf00'
    },
    routes: [
        {
            path: '/', 
            component: './../layouts/index', 
            routes: [
                { 
                    path: '/', 
                    component: './../pages/home/home',
                    title:'首页'
                },
                { 
                    path: '/list', 
                    component: './../pages/home/home',
                    title:'发现'
                }
            ]
        }
    ]
}