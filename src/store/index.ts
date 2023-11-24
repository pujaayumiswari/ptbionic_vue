import { reactive } from "vue";
import { IJobs } from "../types/jobs";

const store = reactive<{
   jobs: IJobs[];
   selectedJobId: IJobs | null | undefined;
   setJobs: (jobs: IJobs[]) => void;
   setSelectedJob: (id: number) => void;
}>({
   jobs: [],
   selectedJobId: null,
   setJobs: (jobs) => {
      store.jobs = jobs;

      store.selectedJobId = jobs[0];
      console.log(store.selectedJobId);
   },
   setSelectedJob: (id) => {
      const selected = store.jobs.find((item) => item.id === id);
      store.selectedJobId = selected;
   },
});

export default store;
