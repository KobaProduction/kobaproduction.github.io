<script setup lang="ts"></script>

<template>
  <q-footer bordered class="footer">
    <q-toolbar>
      <q-toolbar-title>
        <p class="text-caption text-center q-ma-none">
          Dev: <a target="_blank" href="https://github.com/ArthurKoba">Arthur Koba</a>
          |
          <a target="_blank" href="https://github.com/KobaProduction">Koba Production</a>
          &copy; {{ new Date().getFullYear() }}
        </p>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<style scoped>
.footer {
  background-color: inherit;
  color: inherit;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
