<script setup lang="ts">

import appStore from '@/app/stores/store'
import { RouterButton } from '@/shared/ui/buttons/router'

const store = appStore()

</script>

<template>
  <q-header reveal elevated class="bg-primary text-white">
    <q-toolbar>

      <q-btn dense flat round icon="menu" @click="store.toggleSidebar()" />

      <q-toolbar-title>
        <q-avatar>
          <img src="/logo.webp" alt="Koba Production Logo">
        </q-avatar>
        Koba Production
      </q-toolbar-title>
      <RouterButton router-record-name="index" dense flat round icon="home" />
    </q-toolbar>
  </q-header>
</template>
