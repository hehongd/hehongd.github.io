import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    show: '1',
    defaultActive:'/mixin',
    bottomingOut:false,
    scrollTop:0,
    routerScrollTop:0
  }),
  actions: {
    SetUserInfo(data) {
      this.show = data
    }
  }
})
