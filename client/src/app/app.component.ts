import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TeamStore } from './team/team-store.service';
import { TeamMember } from './team/team.model';
import { ProjectStore } from './project/project-store.service';
import { Project } from './project/project.model';


@Component({
  selector: 're-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProjectStore, TeamStore]
})
export class AppComponent {
  projectId: string = "1"
  project: Project
  team: TeamMember[]

  constructor(private projectStore: ProjectStore, private teamStore: TeamStore) {
    this.project = projectStore.getProject(this.projectId)
    this.team = teamStore.getTeam(this.projectId)
  }
}
