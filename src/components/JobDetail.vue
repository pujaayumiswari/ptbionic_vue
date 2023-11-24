<script setup lang="ts">
import { ref, watch } from "vue";
import { apply } from "../api/call";
import store from "../store";
import { IJobs } from "../types/jobs";

interface IForm {
   displayName: string;
   email: string;
   phone: string;
   message: string;
   file: null | File;
}

const selectedJob = ref<IJobs | null>();
const form = ref<IForm>({
   displayName: "",
   email: "",
   phone: "",
   message: "",
   file: null,
});

watch(store, () => {
   selectedJob.value = store.selectedJobId;
});

const handleSubmit = async (e: any) => {
   e.preventDefault();
   if (form.value.displayName.trim() === "" || form.value.email.trim() === "" || form.value.phone.trim() === "") {
      return alert("please fill form!");
   }

   const body = {
      ...form,
      subject: selectedJob.value?.title,
      ptJobApplyType: "APPLICATION",
      isActive: false,
      ptJobPost: { id: selectedJob.value?.id },
   };

   await apply(body);
   alert("Sending Application Success!");
};
</script>

<template>
   <div class="w-full h-full bg-[#DCDCDC] mt-5 rounded-md py-3 px-5">
      <div v-if="selectedJob !== null">
         <h1 class="text-[#2F932F] font-semibold text-2xl">{{ selectedJob?.title }}</h1>
         <div v-html="selectedJob?.description.txt" class="desc"></div>
         <div class="mt-6">
            <h1 class="font-semibold text-lg">Send Your Job Application</h1>
            <form>
               <div class="flex flex-wrap">
                  <div class="m-2 flex flex-col flex-[1_0_40%] gap-1">
                     <label for="" class="font-semibold">Your Name</label>
                     <input
                        type="text"
                        v-model="form.displayName"
                        class="bg-transparent border-b-2 border-gray-500/30 focus-visible:outline-none"
                        placeholder="Enter Your Name"
                     />
                  </div>
                  <div class="m-2 flex flex-col flex-[1_0_40%] gap-1">
                     <label for="" class="font-semibold">Mobile Number</label>
                     <input
                        type="text"
                        v-model="form.phone"
                        class="bg-transparent border-b-2 border-gray-500/30 focus-visible:outline-none"
                        placeholder="Enter Mobile Number"
                     />
                  </div>
                  <div class="m-2 flex flex-col flex-[1_0_40%] gap-1">
                     <label for="" class="font-semibold">Email Address</label>
                     <input
                        type="text"
                        v-model="form.email"
                        class="bg-transparent border-b-2 border-gray-500/30 focus-visible:outline-none"
                        placeholder="Enter your Email Address"
                     />
                  </div>
                  <div class="m-2 flex flex-col flex-[1_0_40%] gap-1">
                     <label for="" class="font-semibold">Write your message here..</label>
                     <input
                        type="text"
                        v-model="form.message"
                        class="bg-transparent border-b-2 border-gray-500/30 focus-visible:outline-none"
                        placeholder="Write your message "
                     />
                  </div>
               </div>
               <div class="m-2 flex flex-col gap-1">
                  <label for="" class="font-semibold">File</label>
                  <input type="file" hidden id="file" />
                  <label for="file" class="w-fit">
                     <div class="w-20 h-20 rounded-lg cursor-pointer bg-[#FFA500] flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" id="upload">
                           <g
                              fill="none"
                              fill-rule="evenodd"
                              stroke="#fff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                           >
                              <path d="M1 16v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3M14 5l-4-4-4 4M10 1v14"></path>
                           </g>
                        </svg>
                     </div>
                  </label>
               </div>
               <button type="submit" class="bg-[#808080] px-4 py-1 text-white rounded-md" @click="handleSubmit">
                  Send Message
               </button>
            </form>
         </div>
      </div>
   </div>
</template>

<style>
ol,
ul,
menu {
   list-style: disc !important;
   margin-left: 2rem !important;
   padding: 0;
}
</style>
