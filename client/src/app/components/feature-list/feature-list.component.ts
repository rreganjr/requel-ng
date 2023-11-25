import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Feature } from '../../feature/feature.model';
import { FeatureStore } from '../../feature/feature-store.service';
import { FeatureDetailComponent } from '../feature-detail/feature-detail.component';

@Component({
  selector: 'req-feature-list',
  standalone: true,
  imports: [CommonModule, FeatureDetailComponent],
  templateUrl: './feature-list.component.html',
  styleUrl: './feature-list.component.css'
})
export class FeatureListComponent {
  @Input() groupId: string = ''
  public features$: Observable<Feature[]> = of([])

  constructor(private featureStore: FeatureStore) {

  }

  ngOnInit(): void {
    console.log(`feature-list.component.ts ngOnInit() groupId: ${this.groupId}`)
      this.features$ = this.featureStore.getFeatures(this.groupId!)
  }
}
