import {create} from 'apisauce'
import config from './Enviorment'
const ENV = {
  // place your wordpress json call here
  baseURL: config.API_ROOT,
  headers: {'content-type': 'application/json'}
}
const setSize = 12
// define the api
const icreateApi = create(ENV)

const getAll = (data = {pageName: null}) => {
  const _getAll = () => icreateApi.get(`posts?per_page=${setSize}`, null, icreateApi.headers)
  return {
    _getAll
  }
}

const getSlug = (data = {pageName: null}) => {
  const _getSlug = () => icreateApi.get(`posts?slug=${data.payload.pageName}`, null, icreateApi.headers)
  return {
    _getSlug
  }
}

const getPage = (data = {pageNumber: 0}) => {
  const _getPage = () => icreateApi.get(`posts?page=${data.payload.pageNumber}&per_page=${setSize}`, null, icreateApi.headers)
  return {
    _getPage
  }
}

export default {
  getAll,
  getSlug,
  getPage
}
