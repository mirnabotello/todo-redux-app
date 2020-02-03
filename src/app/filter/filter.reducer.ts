import * as fromFilter from './filters.actions';

const initialState: fromFilter.ValidFilters = 'all';

export function filterReducer(state = initialState,
                              action: fromFilter.FiltersActions): fromFilter.ValidFilters {

  switch (action.type) {
    case fromFilter.SET_FILTER:
      return action.filter;

    default:
      return state;
  }
}
