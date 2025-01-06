<script setup lang="ts" />

<template>
  <q-layout view="hHh lpr lFr">

    <slot name="header">
      <q-header reveal elevated />
    </slot>

    <slot name="sidebar">
      <q-drawer />
    </slot>

    <slot name="page" />

    <slot name="footer">
      <q-footer bordered class="footer" />
    </slot>

  </q-layout>
</template>

