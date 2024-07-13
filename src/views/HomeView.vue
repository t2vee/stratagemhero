<script setup lang="ts">
import {ref} from "vue";
import { Progress } from '@/components/ui/progress'

const progress = ref(13)
</script>

<template>
  <div class="flex flex-col items-center bg-black bg-[url('/img/superearth.svg')] bg-center bg-no-repeat bg-50%">
    <div class="w-full h-full bg-black/90 flex flex-col items-center justify-between">
      <div class="flex flex-col h-screen w-full desktop:max-w-[1000px] tablet:w-screen items-center py-32 justify-between">
        <div class="w-full h-full">
          <div class="bg-gray-100 h-3 w-full"></div>
          <div class="w-full h-full flex flex-col items-center justify-center">
            <div class="min-h-10 bg-hdgold w-3/4 rounded-[1px] text-black flex items-center justify-center align-middle">
              <p class="text-3xl">
                ORBITAL 380MM HE BARRAGE
              </p>
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
