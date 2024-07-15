<!-- Copyright (c) 2024 t2vee. All rights reserved.
Use of this source code is governed by an MPL license. -->

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="z-[999] absolute h-screen w-screen opacity-40 bg-[radial-gradient(#212121_0.25px,_#000000_0.25px)] [background-size:7px_7px]"></div>
  <RouterView />
</template>