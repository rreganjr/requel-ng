import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TeamStore } from './team/team-store.service';
import { ProjectStore } from './project/project-store.service';
import { Project } from './project/project.model';
import { GoalStore } from './goal/goal-store.service';
import { GoalListComponent } from './components/goal-list/goal-list.component';
import { TeamTableComponent } from './components/team-table/team-table.component';
import {makeGroupId} from './id-builder';
import { FeatureListComponent } from './components/feature-list/feature-list.component';

@Component({
  selector: 're-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GoalListComponent, TeamTableComponent, FeatureListComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProjectStore, TeamStore],
})
export class AppComponent {
  projectId: string = "project-1"
  project: Project

  public makeGroupId = makeGroupId
  constructor(private projectStore: ProjectStore, private teamStore: TeamStore, private goalStore: GoalStore) {
    this.project = projectStore.getProject(this.projectId)
  }
}
