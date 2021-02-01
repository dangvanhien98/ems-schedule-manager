import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderPageGroupDayModule } from '../header-page-group-day/header-page-group-day.module';
import { GroupDayPersonBoardModule } from '../group-day-person-board/group-day-person-board.module'
import { GroupDayAllComponent } from './group-day-all.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorCustomModule } from '../../mat-paginator-custom/mat-paginator-custom.module';

@NgModule({
  declarations: [
    GroupDayAllComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeaderPageGroupDayModule,
    GroupDayPersonBoardModule,
    MatPaginatorCustomModule,
  ],
  exports: [
    GroupDayAllComponent
  ],
})
export class GroupDayAllModule { }
