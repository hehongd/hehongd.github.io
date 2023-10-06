export const getMenuData = [
    {
        path: "/vue3",
        name: 'Vue3',
        meta: {
            title: "VUE3"
        },
        children: [
            {
                path: "/vue3/mixin",
                name: "Mixin",
                component: ()=> import('@/views/vue3/mixin.vue'),
                meta: {
                    title: "Mixin组件的使用"
                }
            },
        ]
    },
    {
        path: "/newDate",
        name: 'NewDate',
        meta: {
            title: "new Date"
        },
        children: [
            {
                path: "/newDate/weekYear",
                name: "WeekYear",
                component: ()=> import('@/views/newDate/weekYear.vue'),
                meta: {
                    title: "设置周下拉框/月下拉框"
                }
            },
            {
                path: '/newDate/wyList',
                name: 'WyList',
                component: ()=> import('@/views/newDate/wyList.vue'),
                meta: {
                    title: "设置前一周(前一月)数据"
                }
            }  
        ]
    },
    {
        path: "/scss",
        name: 'Scss',
        meta: {
            title: "SCSS"
        },
        children: [
            {
                path: '/scss/configuration',
                name: 'Configuration',
                component: ()=> import('@/views/scss/configuration.vue'),
                meta: {
                    title: "VUE3配置scss"
                }
            },
        ]
    },
    {
        path: "/echarts",
        name: 'Echarts',
        meta: {
            title: "ECHARTS"
        },
        children: [
            {
                path: '/echarts/category',
                name: 'Category',
                component: ()=> import('@/views/echarts/category'),
                meta: {
                    title: "柱状图"
                }
            },
            {
                path: '/echarts/pie',
                name: 'Pie',
                component: ()=> import('@/views/echarts/pie'),
                meta: {
                    title: "扁图"
                }
            },
            {
                path: '/echarts/line',
                name: 'Line',
                component: ()=> import('@/views/echarts/line'),
                meta: {
                    title: "线性图"
                }
            },
            {
                path:'/echarts/bulletinBoard',
                name:'BulletinBoard',
                component:()=> import('@/views/echarts/bulletinBoard'),
                meta: {
                    title: "综合看板空模板demo"
                }
            },
            {
                path:'/echarts/monitor',
                name:'Monitor',
                component:()=> import('@/views/echarts/monitor'),
                meta: {
                    title: "综合看板1"
                }
            },
            {
                path:'/echarts/datamonitor',
                name:'Datamonitor',
                component:()=> import('@/views/echarts/datamonitor'),
                meta: {
                    title: "综合看板2"
                }
            },
        ]
    },
    {
        path: "/scroll",
        name: 'Scroll',
        meta: {
            title: "滚动条相关"
        },
        children: [
            {
                path: '/scroll/bottomingOut',
                name: 'BottomingOut',
                component: ()=> import('@/views/scroll/bottomingOut'),
                meta: {
                    title: "滚动触底"
                }
            },
        ]
    },
    {
        path: "/dashboard",
        name: 'Dashboard',
        meta: {
            title: "页面medom制作"
        },
        children: [
            {
                path:'/dashboard/homepage',
                name:'Homepage',
                component:()=> import('@/views/dashboard/homepage'),
                meta: {
                    title: "后台首页"
                }
            },
        ]
    },
    {
        path: "/css",
        name: 'Css',
        meta: {
            title: "CSS-tricks"
        },
        children: [
            {
                path:'/css/csstricks',
                name:'clock',
                component:()=> import('@/views/css/clock'),
                meta: {
                    title: "创建时钟"
                }
            },
            {
                path:'/css/surrounding',
                name:'Surrounding',
                component:()=> import('@/views/css/surrounding'),
                meta: {
                    title: "创建圆形图像库"
                }
            },
            {
                path:'/css/rotation',
                name:'Rotation',
                component:()=> import('@/views/css/rotation'),
                meta: {
                    title: "绕点旋转"
                }
            },
        ]
    },
    {
        path: "/html",
        name: 'Html',
        meta: {
            title: "HTML"
        },
        children: [
            {
                path:'/html/htmltag',
                name:'HtmlTag',
                component:()=> import('@/views/html/htmlTag'),
                meta: {
                    title: "label标签(复选框)"
                }
            },
            {
                path:'/html/height',
                name:'Height',
                component:()=> import('@/views/html/height'),
                meta: {
                    title: "页面高度100%"
                }
            }
        ]
    },
    {
        path: "/select",
        name: 'Select',
        meta: {
            title: "下拉选择"
        },
        children: [
            {
                path:'/select/distpicker',
                name:'Distpicker',
                component:() => import('@/views/select/distpicker'),
                meta: {
                    title: "省市区"
                }
            }
        ]
    },
    {
        path: "/links",
        name: 'Links',
        meta: {
            title: "外部链接"
        },
        children: [
            {
                path:'/links/externalLinks',
                name:'ExternalLinks',
                component:() => import('@/views/links/externalLinks'),
                meta: {
                    title: "实用的工具"
                }
            }
        ]
    },
    {
        path: "/example",
        name: 'Example',
        meta: {
            title: "实例"
        },
        children: [
            {
                path:'/example/carousel',
                name:'Carousel',
                component:() => import('@/views/example/carousel'),
                meta: {
                    title: "旋转木马"
                }
            },
            {
                path:'/example/fullLcreenLoading',
                name:'FullLcreenLoading',
                component:() => import('@/views/example/fullLcreenLoading'),
                meta: {
                    title: "全屏加载动画效果"
                }
            },
            {
                path:'/example/pacman',
                name:'Pacman',
                component:() => import('@/views/example/pacman'),
                meta: {
                    title: "吃豆豆"
                }
            },
            {
                path:'/example/mousehover',
                name:'Mousehover',
                component:() => import('@/views/example/mousehover'),
                meta: {
                    title: "鼠标悬停3D翻转"
                }
            },
            {
                path:'/example/list',
                name:'List',
                component:() => import('@/views/example/list'),
                meta: {
                    title: "flex弹性布局"
                }
            },
            {
                path:'/example/grid',
                name:'Grid',
                component:() => import('@/views/example/grid'),
                meta: {
                    title: "gird网格布局"
                }
            },
            {
                path:'/example/grids',
                name:'Grid',
                meta: {
                    title: "gird网格布局使用"
                },
                children: [
                    {
                        path:'/example/grids/gridTemplateColumns',
                        name:'GridTemplateColumns',
                        component:() => import('@/views/example/grids/gridTemplateColumns.vue'),
                        meta: {
                            title: "gird-template-columns"
                        }
                    },
                    {
                        path:'/example/grids/gridTemplateRows',
                        name:'GridTemplateRows',
                        component:() => import('@/views/example/grids/gridTemplateRows.vue'),
                        meta: {
                            title: "gird-template-rows"
                        }
                    },
                    {
                        path:'/example/grids/gridTemplateAreas',
                        name:'GridTemplateAreas',
                        component:() => import('@/views/example/grids/gridTemplateAreas.vue'),
                        meta: {
                            title: "gird-template-areas"
                        }
                    },
                    {
                        path:'/example/grids/gridAutoFlow',
                        name:'GridAutoFlow',
                        component:() => import('@/views/example/grids/gridAutoFlow.vue'),
                        meta: {
                            title: "gird-auto-flow"
                        }
                    },
                    {
                        path:'/example/grids/justifyAlign',
                        name:'JustifyAlign',
                        component:() => import('@/views/example/grids/justifyAlign.vue'),
                        meta: {
                            title: "justify-align"
                        }
                    },
                    {
                        path:'/example/grids/gridAutoxx',
                        name:'GridAutoxx',
                        component:() => import('@/views/example/grids/gridAutoxx.vue'),
                        meta: {
                            title: "grid-auto-xx"
                        }
                    },
                ]
            },
        ]
    },
    {
        path: "/menu",
        name: 'Menu',
        meta: {
            title: "菜单"
        },
        children: [
            {
                path:'/menu/secondaryMenu',
                name:'SecondaryMenu',
                component:() => import('@/views/menu/secondaryMenu'),
                meta: {
                    title: "左侧二级菜单"
                }
            }
        ]
    },
    {
        path: "/pluginunit",
        name: 'Pluginunit',
        meta: {
            title: "插件的使用"
        },
        children: [
            {
                path: "/pluginunit/dayjs",
                name: "Dayjs",
                component: ()=> import('@/views/pluginunit/dayjs'),
                meta: {
                    title: "Dayjs时间"
                }
            }
        ]
    },

]
