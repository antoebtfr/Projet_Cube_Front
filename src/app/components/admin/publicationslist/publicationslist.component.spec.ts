import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationslistComponent } from './publicationslist.component';

describe('PublicationslistComponent', () => {
  let component: PublicationslistComponent;
  let fixture: ComponentFixture<PublicationslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
