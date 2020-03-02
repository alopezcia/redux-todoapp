import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../model/todo.model';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { ToggleTodoAction, EditarTodoAction, BorrarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico')  txtInputFisico: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkField = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required );

    this.chkField.valueChanges
      .subscribe( () => {
        const accion = new ToggleTodoAction( this.todo.id );
        this.store.dispatch( accion );
      });
  }

  editar(){
    this.editando = true;
    // Nota- hay que demorar un poco el nativeElement para que funcione
    setTimeout( () => {
      this.txtInputFisico.nativeElement.select();
    }, 1 );
  }

  terminarEdicion(){
    this.editando = false;
    if ( this.todo.texto !== this.txtInput.value ) {
      const accion = new EditarTodoAction( this.todo.id, this.txtInput.value );
      this.store.dispatch( accion );
    }
  }

  borrarTodo(){
    const accion = new BorrarTodoAction( this.todo.id );
    this.store.dispatch( accion );
  }
}
