import { Injectable } from '@angular/core';
import { Feature } from './feature.model';
import { Observable, of } from 'rxjs';

interface StoreEntry {
  groupId: string
  features: Feature[]
}

@Injectable({
  providedIn: 'root'
})
export class FeatureStore {

  private data: StoreEntry[]

  constructor() {
    this.data = [
      { 
        groupId: 'project-1',
        features: Feature.fromRawArray([
            {
              id: 'feature-1',
              name: 'UI as a document being edited', 
              description: `
                The user interface will work like a wysiwyg editor with colapsible sections like a table of
                contents, instead of being form and dialog-box oriented. Feedback will be like an editor, 
                for example if a word seems like it should be in the lexicon, it will be underlined the way
                a word processor underlines a spelling error. When the user hovers over it a tool tip like
                interaction will allow the user to add it to the lexicon, or ignore the word.
              `
            },
            {
              id: 'feature-2',
              name: 'Team Management', 
              description: `
                manage team members and permissions via a table interface.
              `
            },
            {
              id: 'feature-3',
              name: 'Project level Goals, Constraints, Qualities (non-functional requirements)', 
              description: `
              `
            },
            {
              id: 'feature-4',
              name: 'Features', 
              description: `
                Detailed definitions for features with a summary or vision, feature specific Goals, qualities,
                and constraints. Feature use cases, stories and scenarios. Media for mockups, demos, documentation.
              `
              },
        ])
      },
    ]
  }

  public getFeatures(projectId: string): Observable<Feature[]> {
    return of(this.data.filter((storeEntry:StoreEntry):boolean => {
      return storeEntry.groupId === projectId
    })[0]?.features || [])
  }

  public getFeature(compositeId: string): Observable<Feature> {
    const splitId: Array<string> = compositeId.split('__')
    const projectId: string = splitId[0]
    const featureId: string = splitId[1]
    console.log(`feature-store.service.ts getFeature(compositeId=${compositeId}) projectId=${projectId} featureId = ${featureId}`)
    return of(this.data.filter((storeEntry:StoreEntry) => {
      return storeEntry.groupId === projectId
    })[0]?.features.filter((feature: Feature) => {
      return feature.id === featureId
    })[0] ?? undefined)
  }
}
