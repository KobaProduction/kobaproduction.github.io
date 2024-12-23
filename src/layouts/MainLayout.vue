<script setup lang="ts">
import {computed, ref} from 'vue'
import {Dark, useQuasar} from 'quasar'
import {useWebApp, useWebAppViewport} from 'vue-tg'
import appStore from 'stores/store'
import SidebarView from './SidebarView.vue'
import HeaderView from "layouts/HeaderView.vue";
import FooterView from "layouts/FooterView.vue";

const $q = useQuasar()
const store = appStore()
const tgWebApp = useWebApp()


Dark.set(store.settings.darkAuto ? 'auto' : store.settings.darkTheme)

tgWebApp.onEvent('themeChanged', () => {
  console.log("Telegram Theme Changed")
  // todo release change theme from tg event, and set tg colors to quasar css
})

if (typeof useWebAppViewport === 'function' && $q.platform.is.mobile) {
  useWebAppViewport().disableVerticalSwipes()
}

const isSidebarOpened = ref(false)

const toggleSidebar = () => isSidebarOpened.value = !isSidebarOpened.value


const styles = computed(() => Dark.isActive?  "text-white bg-dark" : "text-dark bg-white")


</script>

<template>
  <q-layout view="hHh lpr lFr" :class="styles">
    <HeaderView @on-sidebar-toggle="toggleSidebar"/>
    <q-drawer
      v-model="isSidebarOpened"
      side="left"
      :behavior="$q.platform.is.mobile ? 'mobile' : 'desktop'"
      bordered
      overlay
    >
      <SidebarView/>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <FooterView/>
  </q-layout>
</template>
