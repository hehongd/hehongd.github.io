import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    show: '1'
  }),
  actions: {
    SetUserInfo(data) {
      this.show = data
    }
  }
})
