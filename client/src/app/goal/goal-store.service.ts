import { Injectable } from '@angular/core';
import { Goal } from './goal.model';
import { Observable, of } from 'rxjs';

interface StoreEntry {
  groupId: string
  goals: Goal[]
}

@Injectable({
  providedIn: 'root'
})
export class GoalStore {
  private data: StoreEntry[]

  constructor() {
    this.data = [
      { 
        groupId: 'project-1',
        goals: Goal.fromRawArray([
            {goalCategory: {categoryGroup: 'Function'}, text: 'this is a functional goal.'},
            {goalCategory: {categoryGroup: 'Constraint'}, text: 'this is a constraint.'},
            {goalCategory: {categoryGroup: 'Quality', categoryName: 'Compatability'}, text: 'Supports browser versions released within the last 12 months for Chrome, Safari, Firefox, Edge on Windows 10 & 11, Linux XX, Apple OS, Andriod, iOS'},
            {goalCategory: {categoryGroup: 'Quality', categoryName: 'Usability'}, text: 'Supports screen sizes from minimum width-x-height [to maximum widthxheight]?'},
            {goalCategory: {categoryGroup: 'Quality', categoryName: 'Usability'}, text: 'Supports pointing devices such as mice and track balls, touch screen'},
        ])
      },
      {
        groupId: 'project-1__feature-1',
        goals: Goal.fromRawArray([
          {goalCategory: {categoryGroup: 'Function'}, text: 'The user can tab through editable fields, skipping over hidden (colapsed) content.'},
          {goalCategory: {categoryGroup: 'Function'}, text: 'Changes are saved as a user types.'},
          {goalCategory: {categoryGroup: 'Function'}, text: 'The user can easily undo/redo changes within the context of the field they are editing. The user can navigate to a different field and undo/redo changes specific to that field.'},
          {goalCategory: {categoryGroup: 'Quality', categoryName: 'Usability'}, text: 'Editable content is easily identifiable'},
        ])
      }
    ]
  }

  public getGoals(groupId: string): Observable<Goal[]> {
    return of(this.data.filter((storeEntry:StoreEntry):boolean => {
      return storeEntry.groupId === groupId
    })[0]?.goals || [])
  }
}
