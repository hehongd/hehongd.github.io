
import router from "./router"
import { useUserStore } from "@/store/modules/user"
import store from './store'
const user = useUserStore(store)
router.beforeEach((to, from, next) => {
    user.menuPath = to.path
    if( to.path == '/') {
        next({path:'/mixin',replace:true})
    } else{
        next()
    }
})
  