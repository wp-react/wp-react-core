/**
 * Created by brsmith on 7/9/17.
 */
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import RS from 'ramdasauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getPosts: ['payload'],
  wpAllRequested: ['payload'],
  wpPageRequested: ['payload'],
  wpSlugRequested: ['payload'],
  wpFailed: ['error'],
  wpPageRequestFailed: null,
  wpPageSucceeded: ['payload'],
  wpSlugSucceeded: ['payload'],
  wpAllSucceeded: ['payload'],
  wpPageReset:null
})

export const WordpressTypes = Types
export const WordpressActions = Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: false,
  index: 0,
  posts: [],
  hasReachedEnd: false,
  post: null
})

/* ------------- Reducers ------------- */

export const request = (state) => {
  return state.merge({fetching: true, error: null})
}

export const wpPageSucceeded = (state, {payload}) => {
  const newDataArray = state.posts.concat(payload.data)
  return state.merge({posts: newDataArray, fetching: false})
}

export const wpPageRequestFailed = (state) => {
  return state.merge({hasReachedEnd: true, fetching: false})
}

export const wpPageReset = (state) => {
  return state.merge({hasReachedEnd: false, fetching: false})
}

export const wpSlugSucceeded = (state, {payload}) => {
  return state.merge({post: payload.data[0], fetching: false})
}

export const wpAllSucceeded = (state, {payload}) => {
  return state.merge({posts: payload.data, fetching: false})
}

export const getPosts = (state, payload) => {
  return state.merge({...payload, fetching: false})
}

export const failure = (state, { error }) => {
  return state.merge({ fetching: false, error: error })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.WP_SLUG_REQUESTED]: request,
  [Types.WP_PAGE_REQUESTED]: request,
  [Types.WP_ALL_REQUESTED]: request,
  [Types.WP_PAGE_SUCCEEDED]: wpPageSucceeded,
  [Types.WP_SLUG_SUCCEEDED]: wpSlugSucceeded,
  [Types.WP_ALL_SUCCEEDED]: wpAllSucceeded,
  [Types.WP_PAGE_REQUEST_FAILED]: wpPageRequestFailed,
  [Types.WP_PAGE_RESET]: wpPageReset,
  [Types.WP_FAILED]: failure,
  [Types.GET_POSTS]: getPosts
})
