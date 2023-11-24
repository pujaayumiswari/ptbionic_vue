<script setup lang="ts">
import { onMounted } from "vue";
import { getJobs } from "./api/call";
import store from "./store";
import JobCard from "./components/JobCard.vue";
import JobDetail from "./components/JobDetail.vue";

onMounted(async () => {
   const jobs = await getJobs();

   store.setJobs(jobs);
});
</script>

<template>
   <div class="p-5 bg-white min-h-screen">
      <div class="flex flex-wrap gap-2">
         <JobCard v-for="job of store?.jobs" :title="job.title" :key="job.id" :id="job.id" />
      </div>
      <JobDetail />
   </div>
</template>

<style scoped></style>
