import './assets/style/main.css'
import './assets/style/index.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './permissions'
import ElementResizeDetectorMaker from "element-resize-detector";


// svg图标
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon'
import elementIcons from '@/components/SvgIcon/svgicon'
import "./assets/style/echarts/ui.scss";

import { copy,goTop } from "@/utils/helpers.js"
import 'default-passive-events'




const app = createApp(App)
    
// 全局挂载方法
app.config.globalProperties.copy = copy
app.config.globalProperties.goTop = goTop
app.config.globalProperties.$erd = ElementResizeDetectorMaker()


app.use(router)
app.use(elementIcons)
app.component('svg-icon', SvgIcon)
app.use(ElementPlus)
app.mount('#app')
