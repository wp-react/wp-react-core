import { call, put } from 'redux-saga/effects'
import createApi from '../Services'
import { WordpressRedux } from '../index'
const { WordpressActions } = WordpressRedux

export function * wpFetchAll (payload) {
  try {
    const apiCreateAll = createApi.getAll(payload)
    const data = yield call(apiCreateAll._getAll)
    yield put(WordpressActions.wpAllSucceeded(data))
  } catch (e) {
    yield put(WordpressActions.failure({error: e}))
  }
}

export function * wpFetchPage (payload) {
  try {
    const apiCreateAll = createApi.getPage(payload)
    const data = yield call(apiCreateAll._getPage)
    if (data.data.code === 'rest_post_invalid_page_number') {
      yield put(WordpressActions.wpPageRequestFailed())
    }
    yield put(WordpressActions.wpPageSucceeded(data))
  } catch (e) {
    yield put(WordpressActions.failure({error: e}))
  }
}

export function * wpFetchSlug (payload) {
  try {
    const apiCreateAll = createApi.getSlug(payload)
    const data = yield call(apiCreateAll._getSlug)
    yield put(WordpressActions.wpSlugSucceeded(data))
  } catch (e) {
    yield put(WordpressActions.failure({error: e}))
  }
}
