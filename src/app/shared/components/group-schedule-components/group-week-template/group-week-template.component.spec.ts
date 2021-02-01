import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IButtonGroup } from '../../../../store/models/button-group.i';
import { LabelInterface } from '../../../../store/models/label.i';
import { LabelledValue } from '../../../../store/models/labelvalue.i';
import { ListScheduleContent } from '../../../../store/models/list-schedule-content';
import { GroupWeekTemplateComponent } from './group-week-template.component';
import { GroupWeekTemplateModule } from './group-week-template.module';

describe('GroupWeekTemplateComponent', () => {
  let component: GroupWeekTemplateComponent;
  let fixture: ComponentFixture<GroupWeekTemplateComponent>;
  const listSchedule: ListScheduleContent[] =[
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports:[GroupWeekTemplateModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupWeekTemplateComponent);
    component = fixture.componentInstance;
    component.labelHeader = labels;
    component.dataSelect = fakeData;
    component.placeholder = fakeLabel;
    component.buttonGroup = options;
    
    fixture.detectChanges();
  });
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('emit data header-page-group-week', () => {
    it('onValueButtonGroup', () => {
      const spy = jest.spyOn(component.valueButtonGroup, 'emit');
      const value: string = '1';
      component.onValueButtonGroup(value);
      expect(spy).toHaveBeenCalledWith(value);
    });
    it('onGetValueSelect', () => {
      const spy = jest.spyOn(component.getValueSelect, 'emit');
      const value: string = '1';
      component.onGetValueSelect(value);
      expect(spy).toHaveBeenCalledWith(value);
    });
    it('onDailySchedule', () => {
      const spy = jest.spyOn(component.dailySchedule, 'emit');
      const value: string = '1';
      component.onDailySchedule(value);
      expect(spy).toHaveBeenCalledWith(value);
    });
    it('onFirstDayOfWeek', () => {
      const spy = jest.spyOn(component.firstDayOfWeek, 'emit');
      const value: string = '1';
      component.onFirstDayOfWeek(value);
      expect(spy).toHaveBeenCalledWith(value);
    });
  });

  describe("emit data", ()=>{
    it("handleClickMonth", ()=>{
      component.dayFirstInWeek= new Date();
      const expected = new Date();
      const spy = spyOn(component.monthlyOfSchedule, "emit");
      component.handleClickMonth(expected);
        expect(spy).toHaveBeenCalledWith(expected);
    });
    it("handleClickPhone", ()=>{
      const expected = "123456789";
      const spy = spyOn(component.phoneMemoRegistration, "emit");
      component.handleClickPhone(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
    it("handleClickBtnAddTodo", ()=>{
      const expected = "add";
      const data = listSchedule;
      const spy = spyOn(component.btnAddTodo, "emit");
      component.handleClickBtnAddTodo(expected);
      expect(spy).toHaveBeenCalled;
    });
    it("handleClickUserDetail", ()=>{
      const expected = 1;
      const spy = spyOn(component.userDetail, "emit");
      component.handleClickUserDetail(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
    it("clickAddSchedule", ()=>{
      const expected = 1;
      const data = listSchedule;
      const spy = spyOn(component.addSchedule, "emit");
      component.clickAddSchedule(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
    it("clickAddTodo", ()=>{
      const expected = 1;
      const data = listSchedule;
      const spy = spyOn(component.addTodo, "emit");
      component.clickAddTodo(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
    it("getDetail", ()=>{
      const expected = 1;
      const data = listSchedule;
      const spy = spyOn(component.scheduleId, "emit");
      component.getDetail(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });

  describe('emit data header-page-group-week', () => {
    it('checkScroll()', () => {
      global.pageYOffset = 200;
      const expected = true;
      component.checkScroll();
      expect(component.isSticky).toBe(expected);
    });
    it('checkScroll()', () => {
      global.pageYOffset = 40;
      const expected = false;
      component.checkScroll();
      expect(component.isSticky).toBe(expected);
    });
  });
});
