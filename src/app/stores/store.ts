import { defineStore } from 'pinia'
import type { Settings } from './models'

const appStore = defineStore('appStore', {
  state: () => ({
    settings: <Settings>{
      darkAuto: false,
      darkTheme: false,
      vibration: false,
      lang: '',
    },
    userData: {
      jwt: '',
    },
  }),
  actions: {
    setJwt(value: string) {
      this.userData.jwt = value
    },
    setSettings(value: object) {
      this.settings = value as Settings
    },
  },
  persist: {
    debug: true,
    storage: localStorage,
  },
})

export default appStore
