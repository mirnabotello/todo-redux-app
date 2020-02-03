import {Action} from '@ngrx/store';

export const ADD_TODO = '[Todo] Add todo';
export const EDIT_TODO = '[Todo] Edit todo';
export const DELETE_TODO = '[Todo] Delete todo';

export const DELETE_COMPLETED_TODOS = '[Todo] Delete completed todos';

export const TOGGLE_TODO = '[Todo] Toggle todo';
export const TOGGLE_ALL_TODO = '[Todo] Toggle all todos';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public text: string) {
  }
}

export class EditTodoAction implements Action {
  readonly type = EDIT_TODO;

  constructor(public id: number, public text: string) {
  }
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;

  constructor(public id: number) {
  }
}

export class DeleteCompletedTodoAction implements Action {
  readonly type = DELETE_COMPLETED_TODOS;
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {
  }
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;

  constructor(public done: boolean) {
  }
}

export type TodoActions = AddTodoAction |
  ToggleTodoAction |
  EditTodoAction |
  DeleteTodoAction |
  ToggleAllTodoAction |
  DeleteCompletedTodoAction;
