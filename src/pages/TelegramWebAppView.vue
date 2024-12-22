<script setup lang="ts">
import {ref} from "vue";


import {useWebApp} from "vue-tg";

const app = useWebApp()


const isAvailable = ref<boolean>(false)

if (app.initDataUnsafe.hash) {
  isAvailable.value = true
}
</script>

<template>
  <q-page class="q-pa-md">
    <p class="text-h5 q-mx-sm">Telegram WebApp</p>
    <p v-if="!isAvailable">Opened not in telegram app...</p>

    <div v-if="isAvailable && app.initDataUnsafe.user">
      <img v-if="app.initDataUnsafe.user.photo_url" :src="app.initDataUnsafe.user.photo_url" alt="User photo">
      <p>User: {{ app.initDataUnsafe.user.first_name }} {{ app.initDataUnsafe.user.last_name }}</p>
      <p>User or Bot ID: {{ app.initDataUnsafe.user.id }}</p>
      <p v-if="app.initDataUnsafe.user.username">Username: {{ app.initDataUnsafe.user.username }}</p>
      <p>Is bot: {{ app.initDataUnsafe.user.is_bot || false }}</p>
      <p v-if="app.initDataUnsafe.user.is_premium">Used Premium: {{ app.initDataUnsafe.user.is_premium }}</p>
      <p v-if="app.initDataUnsafe.user.language_code">Lang Code: {{ app.initDataUnsafe.user.language_code }}</p>
      <p>User added the bot to the attachment menu: {{ app.initDataUnsafe.user.added_to_attachment_menu || "null" }}</p>
      <p v-if="app.initDataUnsafe.user.allows_write_to_pm !== undefined">
        Allowed write in private messages: {{ app.initDataUnsafe.user.allows_write_to_pm }}
      </p>
      <q-separator class="q-my-sm"/>
      <p>WebApp Link Auth Date: {{ new Date(app.initDataUnsafe.auth_date * 1000) }}</p>
      <p v-if="app.initDataUnsafe.start_param">Start param link: {{ app.initDataUnsafe.start_param }}</p>
    </div>
  </q-page>
</template>
