import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from '../todo/model/todo.model';
import * as fromFilter from './filters.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: fromFilter.ValidFilters): Todo[] {

    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.done);
      case 'pending':
        return todos.filter(todo => !todo.done);
      default:
        return todos;
    }
  }

}
