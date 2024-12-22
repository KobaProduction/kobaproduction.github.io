<script lang="ts" setup>

import SettingsComponentView from 'components/settings/SettingsComponent.vue'
import NavigationView from 'layouts/NavigationView.vue'
import CommunityLinksView from "components/CommunityLinksView.vue";

</script>

<template>
  <q-list>

    <q-separator/>
    <SettingsComponentView/>
    <q-separator/>
    <CommunityLinksView/>
    <q-separator/>
    <NavigationView/>
  </q-list>
</template>
