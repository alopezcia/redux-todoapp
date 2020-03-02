import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar TODO';
export const TOGGLE_TODO = '[TODO] Toogle TODO';
export const TOGGLE_ALL_TODO = '[TODO] Toogle All TODO';
export const EDITAR_TODO = '[TODO] Editar TODO';
export const BORRAR_TODO = '[TODO] Borrar TODO';
export const LIMPIAR_COMPLETADOS_TODO = '[TODO] Limpiar Completados TODO';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor( public texto: string ){}
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor( public id: number ){}
}

export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;
    constructor( public completado: boolean ){}
}


export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;
    constructor( public id: number, public texto: string ){}
}

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;
    constructor( public id: number ){}
}

export class LimpiarCompletadosTodoAction implements Action {
    readonly type = LIMPIAR_COMPLETADOS_TODO;
}

export type Acciones = AgregarTodoAction |
                       ToggleTodoAction |
                       ToggleAllTodoAction |
                       EditarTodoAction |
                       BorrarTodoAction |
                       LimpiarCompletadosTodoAction;
