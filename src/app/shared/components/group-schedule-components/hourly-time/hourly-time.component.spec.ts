import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HourlyTimeComponent } from './hourly-time.component';
import { HourlyTimeModule } from './hourly-time.module';

describe('HourlyTimeComponent', () => {
  let component: HourlyTimeComponent;
  let fixture: ComponentFixture<HourlyTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HourlyTimeModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("ngOnInit()", () => {
    it("should call functions", () => {
      // arrange
      fixture.detectChanges();
      const spyHourArray = spyOn(component, "createHourlyArray");
      const spyFlexPercent = spyOn(component, "setFlexPercent");
      const spyCheckValidInput = spyOn(component, "checkValidInput");
      // act
      component.ngOnInit();
      // assert
      expect(spyHourArray).toHaveBeenCalled(); 
      expect(spyFlexPercent).toHaveBeenCalled();   
      expect(spyCheckValidInput).toHaveBeenCalled();        
    });
  });

  describe("checkValidInput()", () => {
    it("should swap when this.hourStart < 0  and this.hourEnd < 0", () => {
      // arrange
      component.hourStart = -2;
      component.hourEnd = -3;
      const hourStartExpected = 8;
      const hourEndExpected = 19;
      fixture.detectChanges();
      // act
      component.checkValidInput();
      // assert
      expect(component.hourStart).toEqual(hourStartExpected);   
      expect(component.hourEnd).toEqual(hourEndExpected);     
    });
    it("should swap when this.hourStart > this.hourEnd", () => {
      // arrange
      component.hourStart = 24;
      component.hourEnd = 5;
      const hourStartExpected = 5;
      const hourEndExpected = 19;
      fixture.detectChanges();
      // act
      component.checkValidInput();
      // assert
      expect(component.hourStart).toEqual(hourStartExpected);   
      expect(component.hourEnd).toEqual(hourEndExpected);     
    });

    it("should set default values when this.hourStart < 0 ", () => {
      // arrange
      component.hourStart = -2;
      const hourStartExpected = 8;
      fixture.detectChanges();
      // act
      component.checkValidInput();
      // assert
      expect(component.hourStart).toEqual(hourStartExpected);    
    });
    it("should set default values when this.hourStart > this.hourStartDefault", () => {
      // arrange
      component.hourStart = 12;
      const hourStartExpected = 8;
      fixture.detectChanges();
      // act
      component.checkValidInput();
      // assert
      expect(component.hourStart).toEqual(hourStartExpected);    
    });
    it("should set default values when this.hourStart is undefined", () => {
      // arrange
      component.hourStart = undefined;
      const hourStartExpected = 8;
      fixture.detectChanges();
      // act
      component.checkValidInput();
      // assert
      expect(component.hourStart).toEqual(hourStartExpected);    
    });

    it("should set default values when  this.hourEnd > 24", () => {
      // arrange
      component.hourStart = 4;
      component.hourEnd = 25;
      const hourEndExpected = 19;
      fixture.detectChanges();
      // act
      component.checkValidInput();
      // assert
      expect(component.hourEnd).toEqual(hourEndExpected);    
    });
    it("should set default values when  this.hourEnd < 19", () => {
      // arrange
      component.hourStart = 4;
      component.hourEnd = 15;
      const hourEndExpected = 19;
      fixture.detectChanges();
      // act
      component.checkValidInput();
      // assert
      expect(component.hourEnd).toEqual(hourEndExpected);    
    });
    it("should set default values when this.hourEnd < 0 ", () => {
      // arrange
      component.hourStart = -3;
      component.hourEnd = -2;
      const hourEndExpected = 19;
      fixture.detectChanges();
      // act
      component.checkValidInput();
      // assert
      expect(component.hourEnd).toEqual(hourEndExpected);    
    });

    it("should set default values when this.hourEnd is undefined ", () => {
      // arrange
      component.hourEnd = undefined;
      const hourEndExpected = 19;
      fixture.detectChanges();
      // act
      component.checkValidInput();
      // assert
      expect(component.hourEnd).toEqual(hourEndExpected);    
    });
  });

});
