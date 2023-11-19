import { Injectable } from '@angular/core';
import { TeamMember } from './team.model';

@Injectable({
  providedIn: 'root'
})

export class TeamStore {
  private data: TeamMember[]

  constructor() {
    this.data = TeamMember.fromRawArray([
      {name: 'Ron Regan', role: 'Project Lead', organization: {name: 'Ron Regan Consulting'}, contactInfo: [{type: 'email', details: undefined}]}
    ])
  }

  public getTeam(projectId: string): TeamMember[] {
      return this.data
  }
}