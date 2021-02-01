import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HandleWeekComponent } from "./handle-week.component";

@NgModule({
    declarations: [HandleWeekComponent],
    imports: [
        CommonModule,
        FlexLayoutModule
    ],
    exports: [HandleWeekComponent]
})
export class HandleWeekModule{}
