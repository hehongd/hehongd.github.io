/**
 * @Auth: jack
 * @Date: 2022年7月11日17:15:02
 * 动态加载json文件
 */
export function asyncJsonFile(name,meta) {
    return new Promise((resolve, reject) => {
      import(`../../assets/echartsMap/${name}.json`).then((data) => {
        Object.assign(meta, data.default)
        meta.reload = !meta.reload // 添加重新绑定的开关
        resolve(meta)
      })
    })
  }
  
  export async function getAssetsFile(name) {
    const modules = await import.meta.glob(`../assets/echartsMap/*.json`)
    return modules[`../assets/echartsMap/${name}.json`]()
  }
  
  export async function getMapByName(name) {
    return await getAssetsFile(name)
  }
  
  export function getImgUrl(name) {
    return new URL(`../assets/images/monitor/${name}.png`, import.meta.url).href
  }
  