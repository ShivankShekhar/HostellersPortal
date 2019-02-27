import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacLogedComponent } from './fac-loged.component';

describe('FacLogedComponent', () => {
  let component: FacLogedComponent;
  let fixture: ComponentFixture<FacLogedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacLogedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacLogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
