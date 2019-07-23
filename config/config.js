export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
        }]
    ],
    theme:{
        'brand-primary':'#fadb14',
        'brand-primary-tap':'#d4b106'
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