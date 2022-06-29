import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacsaliteListComponent } from './macsalite-list.component';

describe('MacsaliteListComponent', () => {
  let component: MacsaliteListComponent;
  let fixture: ComponentFixture<MacsaliteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacsaliteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacsaliteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
