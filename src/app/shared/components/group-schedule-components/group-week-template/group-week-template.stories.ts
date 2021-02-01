import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { LabelInterface } from '../../../../store/models/label.i';
import { LabelledValue } from '../../../../store/models/labelvalue.i';
import { IButtonGroup } from '../../../../store/models/button-group.i';
import { action } from '@storybook/addon-actions';
import { GroupWeekTemplateModule } from './group-week-template.module';
import { GroupWeekTemplateComponent } from './group-week-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

storiesOf('Group Schedule/1', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [GroupWeekTemplateModule, BrowserAnimationsModule],
    })
  )
  .add('header page', () => ({
    component: GroupWeekTemplateComponent,
    props: {
      isStories: true,
      labelHeader: labels,
      dataSelect: fakeData,
      placeholder: fakeLabel,
      dayFirstInWeek: new Date("01/18/2021"),
      buttonGroup: options,
      //input group-week-person-board
      listSchedule: [
        {
          detailSchedule: [
            {
              scheduleId: 1,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/22/2021 08:00'),
              dueTime: new Date('01/25/2021 09:00'),
              typeSchedule: "Visting",
              typeRepeat: "everyday",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 2,
              title: "Correspondence such as e-mail, review of proposal materials at each siting",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/19/2021 11:00'),
              typeSchedule: "Recruitment",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/19/2021 06:00'),
              dueTime: new Date('01/20/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal material",
              timeStart: new Date('01/14/2021 08:00'),
              dueTime: new Date('01/14/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 08:00'),
              dueTime: new Date('01/16/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 09:00'),
              dueTime: new Date('01/16/2021 10:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
          ],
          detailUser: {
            userId: 1,
            userName: 'lbmui',
            fullName: 'Lê Bá Mùi',
          },
        },
        {
          detailSchedule: [
            {
              scheduleId: 1,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/18/2021 09:00'),
              typeSchedule: "Visting",
              typeRepeat: "everyday",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 2,
              title: "Correspondence such as e-mail, review of proposal materials at each siting",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/19/2021 11:00'),
              typeSchedule: "Recruitment",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/19/2021 06:00'),
              dueTime: new Date('01/20/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal material",
              timeStart: new Date('01/14/2021 08:00'),
              dueTime: new Date('01/14/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 08:00'),
              dueTime: new Date('01/16/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 09:00'),
              dueTime: new Date('01/16/2021 10:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
          ],
          detailUser: {
            userId: 2,
            userName: 'nvquoc',
            fullName: 'Nguyễn Văn Quốc',
          },
        },
        {
          detailSchedule: [
            {
              scheduleId: 1,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/18/2021 09:00'),
              typeSchedule: "Visting",
              typeRepeat: "everyday",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 2,
              title: "Correspondence such as e-mail, review of proposal materials at each siting",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/19/2021 11:00'),
              typeSchedule: "Recruitment",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/19/2021 06:00'),
              dueTime: new Date('01/20/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal material",
              timeStart: new Date('01/14/2021 08:00'),
              dueTime: new Date('01/14/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 08:00'),
              dueTime: new Date('01/16/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 09:00'),
              dueTime: new Date('01/16/2021 10:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
          ],
          detailUser: {
            userId: 3,
            userName: 'ntkthoa',
            fullName: 'Nguyễn Thị Kim Thoa',
          },
        },
        {
          detailSchedule: [
            {
              scheduleId: 1,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/18/2021 09:00'),
              typeSchedule: "Visting",
              typeRepeat: "everyday",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 2,
              title: "Correspondence such as e-mail, review of proposal materials at each siting",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/19/2021 11:00'),
              typeSchedule: "Recruitment",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/19/2021 06:00'),
              dueTime: new Date('01/20/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal material",
              timeStart: new Date('01/14/2021 08:00'),
              dueTime: new Date('01/14/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 08:00'),
              dueTime: new Date('01/16/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 09:00'),
              dueTime: new Date('01/16/2021 10:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
          ],
          detailUser: {
            userId: 4,
            userName: 'ndqphu',
            fullName: 'Nguyễn Duy Quốc Phú',
          },
        },
        {
          detailSchedule: [
            {
              scheduleId: 1,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/18/2021 09:00'),
              typeSchedule: "Visting",
              typeRepeat: "everyday",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 2,
              title: "Correspondence such as e-mail, review of proposal materials at each siting",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/19/2021 11:00'),
              typeSchedule: "Recruitment",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/19/2021 06:00'),
              dueTime: new Date('01/20/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal material",
              timeStart: new Date('01/14/2021 08:00'),
              dueTime: new Date('01/14/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 08:00'),
              dueTime: new Date('01/16/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 09:00'),
              dueTime: new Date('01/16/2021 10:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
          ],
          detailUser: {
            userId: 4,
            userName: 'uyennhi',
            fullName: 'Nguyễn Trương Uyên Nhi 1',
          },
        },
        {
          detailSchedule: [
            {
              scheduleId: 1,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/18/2021 09:00'),
              typeSchedule: "Visting",
              typeRepeat: "everyday",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 2,
              title: "Correspondence such as e-mail, review of proposal materials at each siting",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/19/2021 11:00'),
              typeSchedule: "Recruitment",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/19/2021 06:00'),
              dueTime: new Date('01/20/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal material",
              timeStart: new Date('01/14/2021 08:00'),
              dueTime: new Date('01/14/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 08:00'),
              dueTime: new Date('01/16/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 09:00'),
              dueTime: new Date('01/16/2021 10:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
          ],
          detailUser: {
            userId: 5,
            userName: 'ltnghia',
            fullName: 'Lê Tấn Nghĩa',
          },
        },
        {
          detailSchedule: [
            {
              scheduleId: 1,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/18/2021 09:00'),
              typeSchedule: "Visting",
              typeRepeat: "everyday",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 2,
              title: "Correspondence such as e-mail, review of proposal materials at each siting",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/19/2021 11:00'),
              typeSchedule: "Recruitment",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/19/2021 06:00'),
              dueTime: new Date('01/20/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal material",
              timeStart: new Date('01/14/2021 08:00'),
              dueTime: new Date('01/14/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 08:00'),
              dueTime: new Date('01/16/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 09:00'),
              dueTime: new Date('01/16/2021 10:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
          ],
          detailUser: {
            userId: 6,
            userName: 'lnthi',
            fullName: 'Lê Nguyên Thi',
          },
        },
        {
          detailSchedule: [
            {
              scheduleId: 1,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/18/2021 09:00'),
              typeSchedule: "Visting",
              typeRepeat: "everyday",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 2,
              title: "Correspondence such as e-mail, review of proposal materials at each siting",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/19/2021 11:00'),
              typeSchedule: "Recruitment",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/19/2021 06:00'),
              dueTime: new Date('01/20/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal material",
              timeStart: new Date('01/14/2021 08:00'),
              dueTime: new Date('01/14/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 08:00'),
              dueTime: new Date('01/16/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 09:00'),
              dueTime: new Date('01/16/2021 10:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
          ],
          detailUser: {
            userId: 7,
            userName: 'mxbminh',
            fullName: 'Mai Xuân Bình Minh',
          },
        },
        {
          detailSchedule: [
            {
              scheduleId: 1,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/18/2021 09:00'),
              typeSchedule: "Visting",
              typeRepeat: "everyday",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 2,
              title: "Correspondence such as e-mail, review of proposal materials at each siting",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/19/2021 11:00'),
              typeSchedule: "Recruitment",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/19/2021 06:00'),
              dueTime: new Date('01/20/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal material",
              timeStart: new Date('01/14/2021 08:00'),
              dueTime: new Date('01/14/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 08:00'),
              dueTime: new Date('01/16/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 09:00'),
              dueTime: new Date('01/16/2021 10:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
          ],
          detailUser: {
            userId: 8,
            userName: 'dvhien',
            fullName: 'Đặng Văn Hiền',
          },
        },
        {
          detailSchedule: [
            {
              scheduleId: 1,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/18/2021 09:00'),
              typeSchedule: "Visting",
              typeRepeat: "everyday",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 2,
              title: "Correspondence such as e-mail, review of proposal materials at each siting",
              timeStart: new Date('01/18/2021 08:00'),
              dueTime: new Date('01/19/2021 11:00'),
              typeSchedule: "Recruitment",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/19/2021 06:00'),
              dueTime: new Date('01/20/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 3,
              title: "Correspondence such as e-mail, review of proposal material",
              timeStart: new Date('01/14/2021 08:00'),
              dueTime: new Date('01/14/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 08:00'),
              dueTime: new Date('01/16/2021 09:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
            {
              scheduleId: 4,
              title: "Correspondence such as e-mail, review of proposal materials at each site",
              timeStart: new Date('01/16/2021 09:00'),
              dueTime: new Date('01/16/2021 10:00'),
              typeSchedule: "Meeting",
              typeRepeat: "normal",
              users: [
                {
                  categoryName: 'Nguyễn Văn A',
                  categoryId: 1,
                },
                {
                  categoryName: 'Dương Văn B',
                  categoryId: 2,
                },
              ]
            },
          ],
          detailUser: {
            userId: 9,
            userName: 'dth',
            fullName: 'Dương Trung Hiếu',
          },
        },
      ]
      ,
      icon: {
        iconStart: "warning",
        iconEnd1: "repeat",
        iconEnd2: "folder_shared",
      },
      //
      scheduleId: action('scheduleId'),
      addTodo: action('AddTodo'),
      addSchedule: action('AddSchedule'),
      monthlyOfSchedule: action('btnClickMonth'),
      phoneMemoRegistration: action('btnClickEmtPhone'),
      btnAddTodo: action('btnClickEmtAddTodo'),
      userDetail: action('btnClickEmtUserDetail'),
      
      getValueSelect: action('getValueSelect'),
      valueButtonGroup: action('data'),
      dailySchedule: action('dailySchedule'),
      firstDayOfWeek: action('firstDayOfWeek'),
      //pagination
      onPageChange: action('page changes'),
    },
  }));
var labels: LabelInterface = {
  content: 'Groups',
  size: 13,
  color: '',
  backgroundColor: '',
};
var fakeData: LabelledValue<string>[] = [
  {
    label: 'EMS-1',
    value: '1',
  },
  {
    label: 'EMS-2',
    value: '2',
  },
  {
    label: 'EMS-3',
    value: '3',
  },
  {
    label: 'EMS-5',
    value: '4',
  },
  {
    label: 'EMS-5',
    value: '5',
  },
];

var fakeLabel = 'groups';

const options: IButtonGroup<string>[] = [
  {
    icon: 'fast_forward',
    value: 'next week',
    displayValue: 'next week',
  },
  {
    icon: 'skip_next',
    value: 'next day',
    displayValue: 'next day',
  },
  {
    value: 'today',
    displayValue: 'today',
  },
  {
    icon: 'skip_previous',
    value: 'before day',
    displayValue: 'before day',
  },
  {
    icon: 'fast_rewind',
    value: 'last week',
    displayValue: 'last week',
  },
];