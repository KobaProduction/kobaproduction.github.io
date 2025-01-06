import { defineStore } from 'pinia'
import type { AppSettings, AppStates } from './models'

const appStore = defineStore('appStore', {
  state: () => ({
    states: <AppStates>{
      sidebarOpened: false
    },
    settings: <AppSettings>{
      darkAuto: false,
      darkTheme: false,
      vibration: false,
      lang: 'en'
    }
  }),
  actions: {
    toggleSidebar() {
      this.states.sidebarOpened = !this.states.sidebarOpened
    },
    setAppSettings(value: AppSettings) {
      this.settings = value
    }
  },
  persist: {
    debug: true,
    storage: localStorage
  }
})

export default appStore
