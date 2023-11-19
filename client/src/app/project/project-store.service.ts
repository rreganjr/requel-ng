import { Injectable } from '@angular/core';
import { Project, ProjectType } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectStore {
  private data: Project[]
  constructor() {
    this.data = Project.fromRawArray([
      {id: '1', type: ProjectType.DEFAULT, name: 'Sample Project', vision: 'new Requel design'}
    ])

  }

  public getProject(projectId: string): Project {
      return this.data.filter((project:Project):boolean => {
          return project.id === projectId
      })[0]
  }    
}
