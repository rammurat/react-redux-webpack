import { POST_IDS, POST_LIST, POST_PAGINATION, SORT_TYPE, PROPERTY_TYPE } from './types.js';
// Load dummy JSONs in absence of APIs
// load all property types for city by default
import {ids as all_ids} from '../data/city/ids-all.js'
import {list as all_list} from '../data/city/list-all.js'

// load city - specific property type data only
import {ids as apartments_ids} from '../data/city/apartments/ids.js'
import {list as apartments_list} from '../data/city/apartments/list.js'
import {ids as residences_ids} from '../data/city/residences/ids.js'
import {list as residences_list} from '../data/city/residences/list.js'
import {ids as rooms_ids} from '../data/city/rooms/ids.js'
import {list as rooms_list} from '../data/city/rooms/list.js'
import {ids as studios_ids} from '../data/city/studios/ids.js'
import {list as studios_list} from '../data/city/studios/list.js'

// reset PSP data on filter change and initial load
export const updatePSP = (data) => dispatch => {
  const {ids, list} = data
  dispatch({
    type: POST_IDS,
    payload: ids.data
  })

  dispatch({
    type: POST_LIST,
    payload: list.data.properties
  })

  dispatch({
    type: POST_PAGINATION,
    payload: ids.paginator
  })
};

// fetch latest posts based on last filter action/default configuration
export const fetchPosts = (propertyType = 'all') => dispatch => {
  let ids
  let list

  const data = () => {
    switch(propertyType) {
      // load specific property type only for a particular city
      case 'apartments':
      return {ids: apartments_ids,list: apartments_list}

      case 'residences':
      return {ids: residences_ids,list: residences_list}

      case 'rooms':
      return {ids: rooms_ids,list: rooms_list}

      case 'studios':
      return {ids: studios_ids,list: studios_list}

      // as default is city
      default:
        return {ids: all_ids, list: all_list}
    }
  }

  dispatch(updatePSP(data()))
};

// sort data in asc/desc form
export const updateSortType = (type) => dispatch => {
  dispatch({
    type: SORT_TYPE,
    payload: type
  })
}

// update property type
export const updateProductType = (type) => dispatch => {
  // reset sort type to 'asc' again on main filter change
  dispatch(updateSortType('asc'))

  dispatch({
    type: PROPERTY_TYPE,
    payload: type
  })

  dispatch(fetchPosts(type))
};
