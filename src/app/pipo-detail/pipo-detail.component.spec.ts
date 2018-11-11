import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipoDetailComponent } from './pipo-detail.component';

describe('PipoDetailComponent', () => {
  let component: PipoDetailComponent;
  let fixture: ComponentFixture<PipoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
