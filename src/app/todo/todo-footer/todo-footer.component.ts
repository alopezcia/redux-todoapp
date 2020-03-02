import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import { LimpiarCompletadosTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos;
  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.contarPendientes( state.todos );
      this.filtroActual = state.filtro;
    });
  }
  
  cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos ){
    const accion = new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch( accion );
  }

  contarPendientes( todos: Todo[] ){
      this.pendientes = todos.filter( todo =>  !todo.completado ).length;
  }

  limpiarCompletados(){
    const accion = new LimpiarCompletadosTodoAction();
    this.store.dispatch( accion );
  }
}
