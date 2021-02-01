import { ListScheduleContent } from "./list-schedule-content";
import { Pagination } from "./pagination.i";
import { ScheduleGroupUserParam } from "./schedule-group-user.i";

export interface GroupWeekState {
  paramsGroupWeek: ScheduleGroupUserParam;
  paginationGroupWeek: Pagination;
  schedulesGroupWeek: ListScheduleContent[];
}
