<template>
  <strong>From hello component!</strong>
  <p v-if="someProp">Here should be a prop: {{ someProp }}</p>
  <slot :passthrough="`test using some slot prop ${count}`"></slot>
  <button @click="update">update slot prop count</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  someProp?: string
}>()

const count = ref(0)
const update = () => (count.value = count.value + 1)
</script>

<style lang="scss" scoped></style>
