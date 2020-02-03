import * as fromTodo from './todo.actions';
import {Todo} from './model/todo.model';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');
const todo3 = new Todo('Pedirle el traje a ironman');

todo2.done = true;

const initialState: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = initialState,
                            action: fromTodo.TodoActions) {

  switch (action.type) {
    case fromTodo.ADD_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];

    case fromTodo.EDIT_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            text: action.text
          };
        } else {
          return {
            ...todoEdit
          };
        }
      });

    case fromTodo.DELETE_TODO:
      return state.filter(todoEdit => todoEdit.id !== action.id);

    case fromTodo.DELETE_COMPLETED_TODOS:
      return state.filter(todoEdit => !todoEdit.done);

    case fromTodo.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            done: !todoEdit.done
          };
        } else {
          return {
            ...todoEdit
          };
        }
      });

    case fromTodo.TOGGLE_ALL_TODO:
      return state.map(todoEdit => {
        return {
          ...todoEdit,
          done: action.done
        };
      });

    default:
      return state;
  }
}
