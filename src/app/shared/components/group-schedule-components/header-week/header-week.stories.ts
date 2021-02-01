import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/angular";
import { HeaderWeekComponent } from "./header-week.component";
import { HeaderWeekModule } from "./header-week.module";

storiesOf('Group Schedule/Header week group', module)
.add('header week', () => ({
    component: HeaderWeekComponent,
    moduleMetadata: {
        imports: [HeaderWeekModule]
    },
    props: {
        date: new Date(),
        dailySchedule: action("dailySchedule: "),
        firstDayOfWeek: action("firstDayOfWeek: ")
    }
}))
