import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeamMember } from '../../team/team.model';

@Component({
  selector: 'req-team-role-selector',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './team-role-selector.component.html',
  styleUrl: './team-role-selector.component.css'
})
export class TeamRoleSelectorComponent implements OnInit {

  @Input() teamMember: TeamMember

  constructor() {
    this.teamMember = TeamMember.fromRaw({})
  }

  ngOnInit(): void {
    console.log(`team-table.component.ts ngOnInit() teamMember: ${this.teamMember?.name}`)
  }

}
