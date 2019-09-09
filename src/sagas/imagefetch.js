import { takeLatest, put, call } from 'redux-saga/effects'
import { fetchimages } from '../service/service'

function* getimages(albumId) {
  try {
    const postsFromApi = yield call(fetchimages,albumId)
    yield put({ type: 'FETCH_IMAGES_SUCCESS', payload: postsFromApi.data })
  } catch (error) {
    yield put({ type: 'FETCH_IMAGES_FAILURE' })
    console.error(error) 
  }
}
export function* watchFetchImages() {
  yield takeLatest('FETCH_IMAGES', getimages)
}