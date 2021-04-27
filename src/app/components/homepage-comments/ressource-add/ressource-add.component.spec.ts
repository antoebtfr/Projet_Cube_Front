import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceAddComponent } from './ressource-add.component';

describe('RessourceAddComponent', () => {
  let component: RessourceAddComponent;
  let fixture: ComponentFixture<RessourceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RessourceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
