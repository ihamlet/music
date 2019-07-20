export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
        }]
    ],
    routes: [
        {
            path: '/', 
            component: './../layouts/index', 
            routes: [
                { 
                    path: '/', 
                    component: './../pages/home/home',
                    title:'首页'
                }
            ]
        }
    ]
}