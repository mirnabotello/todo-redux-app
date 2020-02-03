import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../model/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {DeleteTodoAction, EditTodoAction, ToggleTodoAction} from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;

  editing: boolean;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.done);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkField.valueChanges
      .subscribe(() => {
        const action = new ToggleTodoAction(this.todo.id);
        this.store.dispatch(action);
      });
    console.log(this.todo);
  }

  edit() {
    this.editing = true;

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);

  }

  endEdit() {
    this.editing = false;

    if (!this.txtInput.valid) {
      return;
    }

    if (this.txtInput.value === this.todo.text) {
      return;
    }

    const action = new EditTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);
  }

  delete() {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

}
