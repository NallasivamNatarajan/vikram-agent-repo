import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacsaliteDetailsComponent } from './macsalite-details.component';

describe('MacsaliteDetailsComponent', () => {
  let component: MacsaliteDetailsComponent;
  let fixture: ComponentFixture<MacsaliteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacsaliteDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacsaliteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
