import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {makeGroupId} from '../../id-builder';
import { Feature } from '../../feature/feature.model';
import { GoalListComponent } from '../goal-list/goal-list.component';

@Component({
  selector: 'req-feature-detail',
  standalone: true,
  imports: [CommonModule, GoalListComponent],
  templateUrl: './feature-detail.component.html',
  styleUrl: './feature-detail.component.css'
})
export class FeatureDetailComponent {

  @Input() public groupId: string = ''
  @Input() public feature!: Feature
  public makeGroupId = makeGroupId

  constructor() { 
  } 
}
