import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { MainLayoutComponent } from './main-layout.component';
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'todo',
        loadChildren: () =>
          import('../modules/todo-list-page/todo-list-page.module').then(
            (m) => m.TodoListPageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'todo/add',
        loadChildren: () =>
          import('../modules/add-todo-page/add-todo-page.module').then(
            (m) => m.AddTodoPageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'todo/detail',
        loadChildren: () =>
          import('../modules/detail-todo-page/detail-todo-page.module').then(
            (m) => m.TodoDetailPageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'popup',
        loadChildren: () =>
          import(
            '../modules/popup-notification/popup-page/popup-page.module'
          ).then((m) => m.PopupPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'notification',
        loadChildren: () =>
          import('../modules/notification-page/notification-page.module').then(
            (m) => m.NotificationPageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'schedule',
        loadChildren: () =>
          import('../modules/schedule-page/schedule-page.module').then(
            (m) => m.SchedulePageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'schedule/add',
        loadChildren: () =>
          import('../modules/add-schedule-page/add-schedule-page.module').then(
            (m) => m.AddSchedulePageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'schedule/detail',
        loadChildren: () =>
          import(
            '../modules/schedule-detail-page/schedule-detail-page.module'
          ).then((m) => m.ScheduleDetailPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'schedule/scheduleList',
        loadChildren: () =>
          import(
            '../modules/schedule-list-page/schedule-list-page.module'
          ).then((m) => m.ScheduleListPageModule),
      },
      {
        path: 'schedule/groupWeek',
        loadChildren: () =>
          import(
            '../modules/group-week-schedule-list-page/group-week-schedule-list-page.module'
          ).then((m) => m.GroupWeekScheduleListPageModule),
      },
      {
        path: 'schedule/groupWeek/detail',
        loadChildren: () =>
          import(
            '../modules/schedule-detail-page/schedule-detail-page.module'
          ).then((m) => m.ScheduleDetailPageModule),
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
