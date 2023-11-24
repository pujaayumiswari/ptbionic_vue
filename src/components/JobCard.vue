<script setup lang="ts">
import store from "../store";

// Define props
const props = defineProps<{ title: string; id: number }>();
</script>

<template>
   <div class="w-full flex-[1_1_40%] bg-[#DCDCDC] p-3 rounded-md flex justify-between">
      <p class="text-[#2F932F] font-semibold">{{ props.title }}</p>
      <button class="bg-[#FFA500] text-sm px-2 rounded-lg text-white" @click="store.setSelectedJob(props.id)">
         See Job
      </button>
   </div>
</template>

<style scoped>
/* Your component's scoped styles here */
</style>
