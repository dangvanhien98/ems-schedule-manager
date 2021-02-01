
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HourComponent } from './hour.component';
import { HourModule } from './hour.module';

describe('HourComponent', () => {
  let component: HourComponent;
  let fixture: ComponentFixture<HourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        HourModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  describe('ngOnInit', () => {
    it('should pass input hourNumber ', () => {
      // arrange
      component.hourNumber = 2;
      fixture.detectChanges();
      let hour = fixture.debugElement.query(By.css('.hour-pre'));
      // act
      // assert
      expect(component.hourNumber.toString()).toEqual(
        hour.nativeElement.textContent
      );
    });

    it('should set  dynamicColor  when this.hourNumber > 7 && this.hourNumber < 11', () => {
      // arrange
      component.hourNumber = 8;
      const expectedPrevious = "white";
      const expectedNext = "white";
      fixture.detectChanges();
      // act
      component.ngOnInit();
      // assert
      expect(component.dynamicColorPrevious).toEqual(
        expectedPrevious
      );
      expect(component.dynamicColorNext).toEqual(
        expectedNext
      );
    });

    it('should set  dynamicColor  when this.hourNumber = 11', () => {
      // arrange
      component.hourNumber = 11;
      const expectedPrevious = "white";
      const expectedNext = "rgb(228, 227, 227)";
      fixture.detectChanges();
      // act
      component.ngOnInit();
      // assert
      expect(component.dynamicColorPrevious).toEqual(
        expectedPrevious
      );
      expect(component.dynamicColorNext).toEqual(
        expectedNext
      );
    });

    it('should set  dynamicColor  when this.hourNumber = 12 ', () => {
      // arrange
      component.hourNumber = 12;
      const expectedPrevious = "rgb(228, 227, 227)";
      const expectedNext = "rgb(228, 227, 227)";
      fixture.detectChanges();
      // act
      component.ngOnInit();
      // assert
      expect(component.dynamicColorPrevious).toEqual(
        expectedPrevious
      );
      expect(component.dynamicColorNext).toEqual(
        expectedNext
      );
    });

    it('should set  dynamicColor  when this.hourNumber > 12 && this.hourNumber < 17 ', () => {
      // arrange
      component.hourNumber = 14;
      const expectedPrevious = "white";
      const expectedNext = "white";
      fixture.detectChanges();
      // act
      component.ngOnInit();
      // assert
      expect(component.dynamicColorPrevious).toEqual(
        expectedPrevious
      );
      expect(component.dynamicColorNext).toEqual(
        expectedNext
      );
    });

    it('should set  dynamicColor  when this.hourNumber = 17 ', () => {
      // arrange
      component.hourNumber = 17;
      const expectedPrevious = "white";
      const expectedNext = "rgb(228, 227, 227)";
      fixture.detectChanges();
      // act
      component.ngOnInit();
      // assert
      expect(component.dynamicColorPrevious).toEqual(
        expectedPrevious
      );
      expect(component.dynamicColorNext).toEqual(
        expectedNext
      );
    });

    it('should set  dynamicColor  when in other cases ', () => {
      // arrange
      component.hourNumber = 2;
      const expectedPrevious = "rgb(228, 227, 227)";
      const expectedNext = "rgb(228, 227, 227)";
      fixture.detectChanges();
      // act
      component.ngOnInit();
      // assert
      expect(component.dynamicColorPrevious).toEqual(
        expectedPrevious
      );
      expect(component.dynamicColorNext).toEqual(
        expectedNext
      );
    });

  });
});
