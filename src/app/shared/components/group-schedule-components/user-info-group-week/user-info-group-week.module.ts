import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';
import { UserInfoGroupWeekComponent } from './user-info-group-week.component';

@NgModule({
  declarations: [UserInfoGroupWeekComponent],
  imports: [CommonModule, MaterialCustomModule, FlexLayoutModule],
  exports: [UserInfoGroupWeekComponent],
})
export class UserInfoGroupWeekModule {}
