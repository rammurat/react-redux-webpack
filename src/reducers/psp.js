import { POST_IDS, POST_LIST, POST_PAGINATION, INITIAL_CONFIG, SORT_TYPE, PROPERTY_TYPE, CITY } from '../actions/types.js';
import config from '../app-config.js'
// initial post state
const initialState = {
  ids: [],
  products: [],
  paginator: {},
  initialConfig: {
    propertyTypes: {
      all: 'All',
      apartments: 'Apartments',
      rooms: 'Rooms',
      studios: 'Studios',
      residences: 'Residences'
    },
    orders: {
      'asc': 'Ascending',
      'desc': 'Descending'
    },
    pagination: {
      perPage: config.pagination.recordsPerPage,
      from: 0,
      to: 10
    }
  },
  selectedOrder: 'asc',
  selectedPropertyType: 'all',
  selectedCity: 'city',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_IDS:
      return {
        ...state,
        ids: action.payload
      };

    case POST_LIST:
      return {
        ...state,
        products: action.payload
      };

    case POST_PAGINATION:
      return {
        ...state,
        paginator: action.payload
      };

    case INITIAL_CONFIG:
      return {
        ...state,
        initialConfig: action.payload
      };
    
    case SORT_TYPE:
      return {
        ...state,
        selectedOrder: action.payload
      };

    case PROPERTY_TYPE:
      return {
        ...state,
        selectedPropertyType: action.payload
      };

    case CITY:
      return {
        ...state,
        selectedCity: action.payload
      };

    default:
      return state;
  }
}
