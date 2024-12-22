<script setup lang="ts">
import { defineProps } from 'vue'

import type { SettingsProps } from 'components/settings/models'

const props = defineProps<SettingsProps>()
</script>

<template>
  <q-item tag="label" clickable>
    <q-item-section avatar>
      <q-icon :name="props.itemData.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.itemData.title }}</q-item-label>
      <q-item-label caption>{{
        props.itemData.caption ? props.itemData.caption : ''
      }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-toggle
        :model-value="props.itemData.value"
        @update:model-value="props.func"
      />
    </q-item-section>
  </q-item>
</template>
