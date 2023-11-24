import axios from "axios";
import { IJobs } from "../types/jobs";

export const getJobs = async (): Promise<IJobs[]> => {
   const { data } = await axios.get("https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth", {
      headers: {},
   });

   console.log(data);

   return data;
};

export const apply = async (body: any) => {
   const { data } = await axios.post("https://bti.id/services/btiportalcorems/api/pt-job-applies/no-auth", body);

   console.log(data);
   return data;
};
