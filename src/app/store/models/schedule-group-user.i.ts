import { ScheduleContent } from "./schedule_content.i";
import { UserInfo } from "./group-week-user.i";

export interface ScheduleGroupUser{
    userInfo: UserInfo;
    schedules: ScheduleContent;
}

export interface ScheduleGroupUserParam{
    director: number;
    startDate: Date;
    endDate: Date;
}
