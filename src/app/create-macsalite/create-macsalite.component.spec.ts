import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMacsaliteComponent } from './create-macsalite.component';

describe('CreateMacsaliteComponent', () => {
  let component: CreateMacsaliteComponent;
  let fixture: ComponentFixture<CreateMacsaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMacsaliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMacsaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
