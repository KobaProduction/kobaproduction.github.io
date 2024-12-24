<script setup lang="ts">
</script>

<template>

  <q-layout view="hHh lpr lFr">

    <slot name="header"/>
    <slot name="sidebar"/>

    <slot name="page"/>

    <slot name="footer"/>
  </q-layout>
</template>

