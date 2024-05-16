import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCardGroupComponent } from './issue-card-group.component';

describe('IssueCardGroupComponent', () => {
  let component: IssueCardGroupComponent;
  let fixture: ComponentFixture<IssueCardGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssueCardGroupComponent]
    });
    fixture = TestBed.createComponent(IssueCardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
