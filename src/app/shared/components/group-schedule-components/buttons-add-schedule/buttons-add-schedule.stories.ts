import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { ButtonsAddScheduleModule } from './buttons-add-schedule.module';
import { ButtonsAddScheduleComponent } from './buttons-add-schedule.component';

storiesOf('Group Schedule/Button Add schedule', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [ButtonsAddScheduleModule],
    })
  )
  .add('Button Component', () => ({
    component: ButtonsAddScheduleComponent,
    props: {
      //output
      isAddTodo: true,
      userId: 1,
      addTodo: action('btnClickAddTodo'),
      addSchedule: action('btnAddSchedule'),
    },
  }));
