<!-- Copyright (c) 2024 t2vee. All rights reserved.
Use of this source code is governed by an MPL license. -->

<script setup lang="ts">
import {onMounted, ref} from "vue";
import { Progress } from '@/components/ui/progress'
import { STRATAGEMS } from '@/lib/stratagems'

function shuffleStratagems<T>(obj: { [key: string]: T }, count: number): T[] {
  const values = Object.values(obj);
  for (let i = values.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }
  return values.slice(0, count);
}

const progress = ref(13)
const initStratagemList = ref({})

onMounted(
    initStratagemList.value = shuffleStratagems(STRATAGEMS, 5)
)
</script>

<template>
  <div class="flex flex-col items-center bg-black bg-[url('/img/superearth.svg')] bg-center bg-no-repeat bg-50%">
    <div class="w-full h-full bg-black/90 flex flex-col items-center justify-between">
      <div class="flex flex-col h-screen w-full desktop:max-w-[1000px] tablet:w-screen items-center py-32 justify-between">
        <div class="w-full h-full">
          <div class="bg-gray-100 h-3 w-full"></div>
          <div class="w-full h-full flex flex-col items-center justify-center">
            <div class="w-full flex flex-col items-center">
              <div class="flex w-3/4 justify-between mb-[-2px]">
                <img class="border-hdgold border-2 w-[128px] aspect-square" src="/helldivers-icons/Orbital%20Cannons/Orbital%20380MM%20HE%20Barrage.svg" alt="ORBITAL 380MM HE BARRAGE">
                <img class="w-[64px] aspect-square" src="/helldivers-icons/Orbital%20Cannons/Orbital%20380MM%20HE%20Barrage.svg" alt="ORBITAL 380MM HE BARRAGE">
                <img class="w-[64px] aspect-square" src="/helldivers-icons/Orbital%20Cannons/Orbital%20380MM%20HE%20Barrage.svg" alt="ORBITAL 380MM HE BARRAGE">
                <img class="w-[64px] aspect-square" src="/helldivers-icons/Orbital%20Cannons/Orbital%20380MM%20HE%20Barrage.svg" alt="ORBITAL 380MM HE BARRAGE">
                <img class="w-[64px] aspect-square" src="/helldivers-icons/Orbital%20Cannons/Orbital%20380MM%20HE%20Barrage.svg" alt="ORBITAL 380MM HE BARRAGE">
                <img class="w-[64px] aspect-square" src="/helldivers-icons/Orbital%20Cannons/Orbital%20380MM%20HE%20Barrage.svg" alt="ORBITAL 380MM HE BARRAGE">
              </div>
              <div class="min-h-10 bg-hdgold w-3/4 rounded-[1px] text-black flex items-center justify-center align-middle">
                <p class="text-3xl">
                  ORBITAL 380MM HE BARRAGE
                </p>
              </div>
            </div>
            <div class="flex h-1/4 items-center justify-center align-middle gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" height="48" width="48" color="white">
                <path fill='white' fill-rule="evenodd" d="M28.852,27.333V41h-16.7V27.333H0L20.5,0,41,27.333H28.852Z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" height="48" width="48" color="white">
                <path fill='white' fill-rule="evenodd" d="M28.852,27.333V41h-16.7V27.333H0L20.5,0,41,27.333H28.852Z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" height="48" width="48" color="white">
                <path fill='white' fill-rule="evenodd" d="M28.852,27.333V41h-16.7V27.333H0L20.5,0,41,27.333H28.852Z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" height="48" width="48" color="white">
                <path fill='white' fill-rule="evenodd" d="M28.852,27.333V41h-16.7V27.333H0L20.5,0,41,27.333H28.852Z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" height="48" width="48" color="white">
                <path fill='white' fill-rule="evenodd" d="M28.852,27.333V41h-16.7V27.333H0L20.5,0,41,27.333H28.852Z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" height="48" width="48" color="white">
                <path fill='white' fill-rule="evenodd" d="M28.852,27.333V41h-16.7V27.333H0L20.5,0,41,27.333H28.852Z"/>
              </svg>
            </div>
            <Progress v-model="progress" class="min-h-6 bg-gray-700 w-3/4 rounded-[1px]" />
          </div>
          <div class="bg-gray-100 h-3 w-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>
