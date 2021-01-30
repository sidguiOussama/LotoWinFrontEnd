import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MoinsSouventComponent } from './moins-souvent.component';

describe('MoinsSouventComponent', () => {
  let component: MoinsSouventComponent;
  let fixture: ComponentFixture<MoinsSouventComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoinsSouventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoinsSouventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
