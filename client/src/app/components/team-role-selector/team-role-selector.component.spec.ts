import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRoleSelectorComponent } from './team-role-selector.component';

describe('TeamRoleSelectorComponent', () => {
  let component: TeamRoleSelectorComponent;
  let fixture: ComponentFixture<TeamRoleSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamRoleSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamRoleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
