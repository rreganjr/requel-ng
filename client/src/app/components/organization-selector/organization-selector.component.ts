import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeamMember } from '../../team/team.model';

@Component({
  selector: 'req-organization-selector',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './organization-selector.component.html',
  styleUrl: './organization-selector.component.css'
})
export class OrganizationSelectorComponent {
  @Input() teamMember: TeamMember

  constructor() {
    this.teamMember = TeamMember.fromRaw({})
  }

  ngOnInit(): void {
    console.log(`organization-selector.component.ts ngOnInit() teamMember: ${this.teamMember?.name}`)
  }

}
