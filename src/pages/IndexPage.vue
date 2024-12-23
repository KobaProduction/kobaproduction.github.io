<script lang="ts" setup>
import { showBackground } from "components/background"
import { onMounted } from 'vue'


onMounted(showBackground)

</script>

<template>
    <q-page class="full-width">
      <canvas id="background-canvas" class="full-width"/>
    </q-page>
</template>



