import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { UserInfoGroupWeekComponent } from './user-info-group-week.component';
import { UserInfoGroupWeekModule } from './user-info-group-week.module';

storiesOf('Group Schedule/Group week', module).add('User Info Group week', () => ({
  component: UserInfoGroupWeekComponent,
  moduleMetadata: {
    imports: [UserInfoGroupWeekModule],
  },
  props: {
    userInfo: {
      userId: 1,
      userName: 'uyennhi',
      fullName: 'Nguyễn Trương Uyên Nhi 1',
    },
    monthly: "1/1/2020",
    month: action('btnClickMonth'),
    phone: action('btnClickEmtPhone'),
    btnAddTodo: action('btnClickEmtAddTodo'),
    userDetail: action('btnClickEmtUserDetail'),
  },
}));
