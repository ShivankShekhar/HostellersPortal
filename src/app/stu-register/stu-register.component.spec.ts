import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuRegisterComponent } from './stu-register.component';

describe('StuRegisterComponent', () => {
  let component: StuRegisterComponent;
  let fixture: ComponentFixture<StuRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
