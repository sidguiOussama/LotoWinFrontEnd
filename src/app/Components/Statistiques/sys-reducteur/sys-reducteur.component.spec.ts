import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysReducteurComponent } from './sys-reducteur.component';

describe('SysReducteurComponent', () => {
  let component: SysReducteurComponent;
  let fixture: ComponentFixture<SysReducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysReducteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysReducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
