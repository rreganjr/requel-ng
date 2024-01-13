import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TeamMember } from '../../team/team.model';
import { Observable, of } from 'rxjs';
import { TeamStore } from '../../team/team-store.service';
import { ContenteditableValueAccessor } from '../../util/contenteditable-value-accessor';
import { TeamRoleSelectorComponent } from '../team-role-selector/team-role-selector.component';
import { OrganizationSelectorComponent } from '../organization-selector/organization-selector.component';

@Component({
  selector: 'req-team-table',
  standalone: true,
  imports: [CommonModule, FormsModule, ContenteditableValueAccessor, TeamRoleSelectorComponent, OrganizationSelectorComponent],
  templateUrl: './team-table.component.html',
  styleUrl: './team-table.component.css'
})
export class TeamTableComponent implements OnInit {

  @Input() groupId: string|undefined
  public team$: Observable<TeamMember[]> = of([])
  public newTeamMember: TeamMember

  constructor(private teamStore: TeamStore) {
    this.newTeamMember = TeamMember.fromRaw({})
  }

  ngOnInit(): void {
    console.log(`team-table.component.ts ngOnInit() groupId: ${this.groupId}`)
      this.team$ = this.teamStore.getTeam(this.groupId!)
  }

}
