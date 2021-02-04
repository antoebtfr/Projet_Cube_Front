import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCommentsComponent } from './homepage-comments.component';

describe('HomepageCommentsComponent', () => {
  let component: HomepageCommentsComponent;
  let fixture: ComponentFixture<HomepageCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
