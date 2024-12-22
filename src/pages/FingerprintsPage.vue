<script setup lang="ts">
import {ref} from "vue";

import type {GetResult} from "@fingerprintjs/fingerprintjs"
import {load} from "@fingerprintjs/fingerprintjs"

const fingerprint = ref<GetResult | null>(null)

load().then(fp => fp.get().then(result => fingerprint.value = result))
</script>

<template>
  <q-page class="q-pa-md">
    <p class="text-h3 q-mx-sm">FingerprintJS</p>
    <p>Link: <a href="https://fingerprint.com/">fingerprint.com</a></p>
    <p v-if="!fingerprint">Loading...</p>
    <p v-if="fingerprint">Package Version: {{ fingerprint.version }}</p>
    <p v-if="fingerprint">Your visitor ID: {{ fingerprint.visitorId }}</p>
  </q-page>
</template>
