import { takeLatest, put, call } from 'redux-saga/effects'
import { fetchallimage } from '../service/service'

function* fetchAll() {
    try {
        const items = yield call(fetchallimage)
        yield put({ type: 'FETCH_ALL_SUCCESS', payload: items.data })
      } catch (error) {
        yield put({ type: 'FETCH_ALL_FAILURE' })
        console.error(error) 
      }
}
export function* watchfetchAllimg() {
  yield takeLatest('FETCH_ALL', fetchAll)
}
