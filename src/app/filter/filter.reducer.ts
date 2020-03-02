
import * as fromFiltro from './filter.actions';

const estadoInicial: fromFiltro.filtrosValidos = 'todos';

export function fitrosReducer( state = estadoInicial, action: fromFiltro.acciones  ): fromFiltro.filtrosValidos {
    switch( action.type ){
        case fromFiltro.SET_FILTRO:
            return action.filter;

        default:
            return state;
    }
}