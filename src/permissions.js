
import router from "./router"
import { useUserStore } from "@/store/modules/user"
import store from './store'
import {getMenuData} from "@/utils/menu.js"


const user = useUserStore(store)
console.log(router.options.routes)
let arrMenu = []
function getMenu() {
    let getMenuList = filterAsyncRouter(getMenuData)
    getMenuList.forEach(route => {
        router.addRoute(route)
    })
}
getMenu()

console.log(router.options.routes)


function filterAsyncRouter(asyncRouterMap) {
    asyncRouterMap.forEach(item => {
      if(!item.children) {
        arrMenu.push(item)
        
      } else if(item.children && item.children.length>0) {
        filterAsyncRouter(item.children)
      }
    })
    return arrMenu
  }

  router.beforeEach((to, from, next) => {
    
    user.menuPath = to.path
    if( to.path == '/') {
        next({path:'/mixin',replace:true})
    } else{
        next()
    }
    
})