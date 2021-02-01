import { Category } from "./category.i";

export interface ScheduleContent {
  scheduleId: number;
  title: string;
  timeStart: Date;
  dueTime: Date;
  typeSchedule?: string;
  typeRepeat?: string;
  users?: Category[];
  isWarning?: boolean;
}
export interface Icon {
  iconStart?: string;
  iconEnd1?: string;
  iconEnd2?: string; 
}
