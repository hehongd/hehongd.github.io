import useClipboard from 'vue-clipboard3'
import { ElMessage } from 'element-plus'
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
