import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcartMaxMinComponent } from './ecart-max-min.component';

describe('EcartMaxMinComponent', () => {
  let component: EcartMaxMinComponent;
  let fixture: ComponentFixture<EcartMaxMinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcartMaxMinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcartMaxMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
