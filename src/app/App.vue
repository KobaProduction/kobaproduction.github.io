<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Dark, useQuasar } from 'quasar'

import { useWebApp, useWebAppViewport } from 'vue-tg'

import appStore from 'src/app/stores/store'
import HeaderSlot from '@/shared/ui/HeaderSlot.vue'
import FooterSlot from '@/shared/ui/FooterSlot.vue'
import SidebarSlot from '@/shared/ui/SidebarSlot.vue'
import { DefaultLayout } from '../shared/ui/layouts'

const store = appStore()
const tgWebApp = useWebApp()

Dark.set(store.settings.darkAuto ? 'auto' : store.settings.darkTheme)

tgWebApp.onEvent('themeChanged', () => {
  console.log('Telegram Theme Changed')
  // todo release change theme from tg event, and set tg colors to quasar css
})

const quasar = useQuasar()

if (typeof useWebAppViewport === 'function' && quasar.platform.is.mobile) {
  useWebAppViewport().disableVerticalSwipes()
}

const isSidebarOpened = ref(false)

const toggleSidebar = () => {isSidebarOpened.value = !isSidebarOpened.value}

const styles = computed(() => Dark.isActive ? 'text-white bg-dark' : 'text-dark bg-white')

const route = useRoute()
const layout = computed(() => route.meta.layout || DefaultLayout)
</script>

<template>
  <div :class="styles">
    <component :is="layout" :styles="styles">

      <template v-slot:header>
        <HeaderSlot @on-sidebar-toggle="toggleSidebar" />
      </template>

      <template v-slot:sidebar>
        <q-drawer
          v-model="isSidebarOpened"
          side="left"
          :behavior="quasar.platform.is.mobile ? 'mobile' : 'desktop'"
          bordered
          overlay
        >
          <SidebarSlot/>
        </q-drawer>
      </template>

      <template v-slot:page>
        <q-page-container>
          <router-view />
        </q-page-container>
      </template>

      <template v-slot:footer>
        <FooterSlot />
      </template>
    </component>
  </div>
</template>

