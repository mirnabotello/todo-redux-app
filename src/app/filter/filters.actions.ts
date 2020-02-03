import {Action} from '@ngrx/store';

export const SET_FILTER = '[Filter] Set Filtro';

export type ValidFilters = 'all' | 'completed' | 'pending';

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;

  constructor(public filter: ValidFilters) {
  }
}

export type FiltersActions = SetFilterAction;
