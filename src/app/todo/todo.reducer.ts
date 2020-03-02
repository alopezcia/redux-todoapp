import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';
import { EDITAR_TODO } from './todo.actions';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');
const todo3 = new Todo('Pedir prestado el traje de Ironman');

todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer( state = estadoInicial, 
                            action : fromTodo.Acciones ){
    switch( action.type ){
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            // Clonar el state
            return [...state, todo ];

        case fromTodo.TOGGLE_TODO:
            return state.map( todoEdit => {
                if ( todoEdit.id === action.id ) {
                    return {
                        // Siempre hay que clonar cualquier objeto
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit;
                }
            });

        case fromTodo.TOGGLE_ALL_TODO:
            return state.map( todoEdit => {
                    return {
                        // Siempre hay que clonar cualquier objeto
                        ...todoEdit,
                        completado: action.completado
                    };
            });
    
            
        case fromTodo.EDITAR_TODO:
            return state.map( todoEdit => {
                if ( todoEdit.id === action.id ) {
                        return {
                            // Siempre hay que clonar cualquier objeto
                            ...todoEdit,
                            texto: action.texto
                        };
                    } else {
                        return todoEdit;
                }
            });

        case fromTodo.BORRAR_TODO:
            return state.filter(  todoEdit => todoEdit.id !== action.id );

        case fromTodo.LIMPIAR_COMPLETADOS_TODO:
            return state.filter(  todoEdit => !todoEdit.completado );

        default:
            return state;
    }

}