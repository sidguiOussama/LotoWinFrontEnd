import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlusSouventComponent } from './plus-souvent.component';

describe('PlusSouventComponent', () => {
  let component: PlusSouventComponent;
  let fixture: ComponentFixture<PlusSouventComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusSouventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusSouventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
