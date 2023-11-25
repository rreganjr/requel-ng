import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Goal } from '../../goal/goal.model';
import { GoalStore } from '../../goal/goal-store.service';
import { Observable, of } from 'rxjs';
import { makeGroupId } from '../../id-builder';

@Component({
  selector: 'req-goal-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goal-list.component.html',
  styleUrl: './goal-list.component.css'
})
export class GoalListComponent implements OnInit {

  @Input() groupId: string|undefined
  public goals$: Observable<Goal[]> = of([])

  constructor(private goalStore: GoalStore) {

  }

  ngOnInit(): void {
    console.log(`goal-list.component.ts ngOnInit() groupId: ${this.groupId}`)
      this.goals$ = this.goalStore.getGoals(this.groupId!)
  }

}
