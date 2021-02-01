import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DayInWeekModule } from "../day-in-week/day-in-week.module";
import { HandleWeekModule } from "../handle-week/handle-week.module";
import { HeaderWeekComponent } from "./header-week.component";

@NgModule({
    declarations: [HeaderWeekComponent],
    imports: [
        DayInWeekModule,
        HandleWeekModule,
        FlexLayoutModule,
        CommonModule
    ],
    exports: [HeaderWeekComponent]
})
export class HeaderWeekModule { }
