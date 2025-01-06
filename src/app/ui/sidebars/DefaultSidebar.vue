<script lang="ts" setup>
import { useQuasar } from 'quasar'

import appStore from '@/app/stores/store'
// import SettingsComponentView from 'components/settings/SettingsComponent.vue'
// import CommunityLinksView from "components/CommunityLinksView.vue";
import NavigationWidget from '@/widgets/navigation'

const store = appStore()
const quasar = useQuasar()
</script>

<template>
  <q-drawer
    v-model="store.states.sidebarOpened"
    side="left"
    :behavior="quasar.platform.is.mobile ? 'mobile' : 'desktop'"
    bordered
    overlay
  >
    <q-list>
      <q-separator />
      <!--      <SettingsComponentView/>-->
      <q-separator />
      <!--      <CommunityLinksView/>-->
      <q-separator />
      <NavigationWidget />
    </q-list>
  </q-drawer>
</template>
