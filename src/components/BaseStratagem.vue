<!-- Copyright (c) 2024 t2vee. All rights reserved.
Use of this source code is governed by an MPL license. -->

<script setup lang="ts">
defineProps({
  name: {type: String, required: true},
  icon: {type: String, required: true},
  active: {type: Boolean, required: false, default: false}
});
</script>

<template>
  <img :class="active ? 'w-[128px] border-hdgold border-2' : 'w-[64px]'" class="aspect-square" :src="icon" :alt="name">
</template>