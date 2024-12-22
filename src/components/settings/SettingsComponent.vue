<script lang="ts" setup>
import {ref} from 'vue'
import {Dark, useQuasar} from 'quasar'

import SettingsItemView from 'components/settings/SettingsItem.vue'
import appStore from 'stores/store'
import type {SettingItemData} from 'components/settings/models'
import {hapticSuccess} from 'boot/telegramHapticFeedback'

const store = appStore()
const settings = store.settings

const showSettings = ref(false)

const darkModeAuto = ref<SettingItemData>({
  title: 'Auto dark mode',
  caption: 'auto',
  value: settings.darkAuto,
  icon: 'dark_mode',
})

const darkMode = ref<SettingItemData>({
  title: 'Dark mode',
  caption: 'toggle',
  value: settings.darkTheme,
  icon: 'dark_mode',
})

const hapticFeedback = ref<SettingItemData>({
  title: 'Vibration',
  caption: 'haptic feedback',
  value: settings.vibration,
  icon: 'vibration',
})

function changeDarkMode(value: boolean) {
  darkMode.value.value = value
  Dark.set(value)
  settings.darkTheme = value
  store.setSettings(settings)
}

function changeDarkModeAuto(value: boolean) {
  darkModeAuto.value.value = value
  settings.darkAuto = value
  if (value) {
    changeDarkMode(false)
    Dark.set('auto')
  }
  changeDarkMode(Dark.isActive)
}

function changeHapticFeedback(value: boolean) {
  hapticFeedback.value.value = value
  if (value) hapticSuccess()
  settings.vibration = value
  store.setSettings(settings)
}

const $q = useQuasar()

</script>

<template>
  <q-item tag="label">
    <q-item-section>
      <q-item-label>Settings</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn
        round
        flat
        no-caps
        dense
        color="transparent"
        :text-color="Dark.isActive ? 'white' : 'black'"
        :icon="!showSettings ? 'keyboard_arrow_down' : 'keyboard_arrow_up'"
        @click="showSettings = !showSettings"
      />
    </q-item-section>
  </q-item>

  <q-separator/>

  <div v-if="showSettings">
    <SettingsItemView :item-data="darkModeAuto" :func="changeDarkModeAuto"/>
    <SettingsItemView v-if="!darkModeAuto.value" :item-data="darkMode" :func="changeDarkMode"/>
    <SettingsItemView
      v-if="$q.platform.is.mobile"
      :item-data="hapticFeedback"
      :func="changeHapticFeedback"
    />
  </div>
</template>
