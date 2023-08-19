import request from '@/utils/request'

// 查询缓存详细
export function getMenu() {
    return request({
        url: '../JSON/menu.json',
        method: 'get'
    })
}