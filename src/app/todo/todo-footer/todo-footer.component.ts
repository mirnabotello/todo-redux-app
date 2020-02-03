import {Component, OnInit} from '@angular/core';

import * as fromFilter from '../../filter/filters.actions';
import {AppState} from '../../app.reducers';
import {Store} from '@ngrx/store';
import {Todo} from '../model/todo.model';
import {DeleteCompletedTodoAction} from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters: fromFilter.ValidFilters[] = ['all', 'completed', 'pending'];
  currentFilter: fromFilter.ValidFilters;
  taskNumber: number;
  pendingTasks: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.taskNumber = state.todos.length;
      this.countPendingTasks(state.todos);
    });
  }

  changeFilter(newFilter: fromFilter.ValidFilters) {
    const action = new fromFilter.SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

  countPendingTasks(todos: Todo[]) {
    this.pendingTasks = todos.filter(todo => !todo.done).length;
  }

  clearCompleted() {
    const action = new DeleteCompletedTodoAction();
    this.store.dispatch(action);
  }
}
