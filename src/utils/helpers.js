import useClipboard from 'vue-clipboard3'
import { ElMessage } from 'element-plus'
import { useUserStore } from "@/store/user"
import store from '../store'

//粘贴板方法
const { toClipboard } = useClipboard()
export const copy = async (refVal) => {
      try {
        await toClipboard(refVal)
        ElMessage({
            message: '复制成功',
            type: 'success',
        })
      } catch (e) {
        console.error(e)
      }
}
const user = useUserStore(store)
export const goTop = () =>{
  let top = user.scrollTop;
  // 实现过度滚动效果
  const timeTop = setInterval(() => {
  user.routerScrollTop = top -= 50;
      if (top <= 0) {
          clearInterval(timeTop);
      }
  }, 10);
}