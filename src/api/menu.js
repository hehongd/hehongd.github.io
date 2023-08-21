import request from '@/utils/request'

// 查询缓存详细
export function getMenuInfo() {
    return request({
      url: '/menu.json',
      method: 'get'
    })
  }