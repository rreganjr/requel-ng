import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TeamMember, TeamStore } from '../team/team.model'


@Component({
  selector: 're-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  projectId:string=""
  projectName:string = '[Project Name]'
  team: TeamMember[] = new TeamStore().getTeam(this.projectId)
}
