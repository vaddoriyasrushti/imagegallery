import { all } from 'redux-saga/effects'
import { watchfetchAllimg } from './allimagefetch'
import { watchFetchImages } from './imagefetch'
import { watchaddtofvt,watchremovefromfvt } from './addtofvt'
export default function* rootSaga() {
  yield all([
    watchfetchAllimg(),
    watchFetchImages(),
    watchaddtofvt(),
    watchremovefromfvt()
  ])
}
