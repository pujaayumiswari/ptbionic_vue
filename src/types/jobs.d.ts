export interface IJobs {
   id: number;
   isActive: boolean;
   createdBy: string;
   createdDate: Date;
   description: {
      id: number;
      txt: string;
   };
   lastModifiedBy: string;
   lastModifiedDate: Date;
   ptJobApplies: any;
   ptJobSkills: { id: number; name: string }[];
   seq: number;
   title: string;
}
