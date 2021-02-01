import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupWeekScheduleListPageComponent } from './group-week-schedule-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: GroupWeekScheduleListPageComponent,
    children: [
      {
        path: '',
        component: GroupWeekScheduleListPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupWeekScheduleListPageRouter {}
