import { all } from 'redux-saga/effects'
import { watchfetchAllimg } from './allimagefetch'
import { watchFetchImages } from './imagefetch'
export default function* rootSaga() {
  yield all([
    watchfetchAllimg(),
    watchFetchImages()
  ])
}
