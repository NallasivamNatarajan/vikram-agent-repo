import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMacsaliteComponent } from './update-macsalite.component';

describe('UpdateMacsaliteComponent', () => {
  let component: UpdateMacsaliteComponent;
  let fixture: ComponentFixture<UpdateMacsaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMacsaliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMacsaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
