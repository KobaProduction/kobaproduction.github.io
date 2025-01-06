<script setup lang="ts">
import { RouterButton } from '@/shared/ui/buttons/router'
</script>

<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 10vh">404</div>
      <div class="text-h2" style="opacity: 0.4">{{$t('oopsNothingHere')}}</div>
      <RouterButton
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        router-record-name="index"
        :label="$t('goToIndexPage')"
        no-caps
      />
    </div>
  </div>
</template>
