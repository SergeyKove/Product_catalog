<template>
  <li>
    <button class="glow-on-hover">{{ brand.title }}</button>
  </li>
</template>

<script setup>
const props = defineProps(['brand'])
</script>
