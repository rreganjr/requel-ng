import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMember } from '../../team/team.model';
import { Observable, of } from 'rxjs';
import { TeamStore } from '../../team/team-store.service';

@Component({
  selector: 'req-team-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-table.component.html',
  styleUrl: './team-table.component.css'
})
export class TeamTableComponent implements OnInit {

  @Input() groupId: string|undefined
  public team$: Observable<TeamMember[]> = of([])

  constructor(private teamStore: TeamStore) {

  }

  ngOnInit(): void {
    console.log(`team-table.component.ts ngOnInit() groupId: ${this.groupId}`)
      this.team$ = this.teamStore.getTeam(this.groupId!)
  }

}
