<script lang="ts" setup>
import {ref} from 'vue'
import {Dark} from 'quasar'


const isShowNavigationLinks = ref<boolean>(false)

interface LinkProps {
  title: string,
  icon: string,
  path: string,
}

const navigationLinks = ref<LinkProps[]>([
  {
    title: "FingerprintJS",
    icon: "img:https://fingerprint.com/img/favicon.ico",
    path: "fp-info",
  }, {
    title: "Telegram WebApp",
    icon: "img:https://telegram.org/img/website_icon.svg",
    path: "tg-webapp-info",
  }
])


</script>

<template>
  <q-item tag="label">
    <q-item-section>
      <q-item-label>Utils</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn
        round
        flat
        no-caps
        dense
        color="transparent"
        :text-color="Dark.isActive ? 'white' : 'black'"
        :icon="!isShowNavigationLinks ? 'keyboard_arrow_down' : 'keyboard_arrow_up'"
        @click="isShowNavigationLinks = !isShowNavigationLinks"
      />
    </q-item-section>
  </q-item>

  <q-separator/>

  <div v-if="isShowNavigationLinks">
    <q-item
      v-for="(prop, index) in navigationLinks"
      :key="index"
      tag="router-link"
      :to="{ path: prop.path }"
      clickable
    >
      <q-item-section avatar>
        <q-icon :name="prop.icon"/>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ prop.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>
