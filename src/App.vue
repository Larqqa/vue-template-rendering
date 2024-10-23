<template>
  <render-dynamic :template="d[1]"></render-dynamic>
</template>

<script setup lang="ts">
import RenderDynamic from './components/RenderDynamic.vue'
import d from './page_data'
</script>

<style lang="scss" scoped></style>
