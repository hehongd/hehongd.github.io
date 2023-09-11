import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    show: '1',
    defaultActive:'/mixin',
    bottomingOut:false,
    scrollTop:0,
    routerScrollTop:0,
    menuPath:'',
    isNotice:true,
    isCollapse:false
  }),
  actions: {
    SetUserInfo(data) {
      this.show = data
    }
  }
})
