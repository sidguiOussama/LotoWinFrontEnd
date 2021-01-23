import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortieAnneeComponent } from './sortie-annee.component';

describe('SortieAnneeComponent', () => {
  let component: SortieAnneeComponent;
  let fixture: ComponentFixture<SortieAnneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortieAnneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortieAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
