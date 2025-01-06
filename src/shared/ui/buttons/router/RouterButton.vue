<script setup lang="ts">

import { useRouter } from 'vue-router'
import type { RouterButtonProps } from './types'
import { QBtn } from 'quasar'
import type {QBtnProps} from 'quasar'

const props = defineProps<RouterButtonProps>()
const routes = useRouter().getRoutes().filter((element) => element.name === props.routerRecordName)
const route = routes.length ? routes[0] : undefined
</script>

<template>
  <component :is="QBtn" v-bind="{...props, to: route, disable: route === undefined} as QBtnProps">
    <slot/>
  </component>
</template>
