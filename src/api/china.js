import request from '@/utils/request'

// 查询缓存详细
export function getCinatMap() {
    return request({
      url: '/china.json',
      method: 'get'
    })
  }