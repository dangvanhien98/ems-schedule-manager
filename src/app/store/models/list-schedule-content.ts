import { UserInfo } from './group-week-user.i';
import { ScheduleContent } from './schedule_content.i';

export interface ListScheduleContent {
  detailSchedule: ScheduleContent[];
  detailUser: UserInfo;
}
