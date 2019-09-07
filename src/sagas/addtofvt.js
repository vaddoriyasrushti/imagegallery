import { takeLatest, put } from 'redux-saga/effects'

function* addtofvt(data) {
    try {
        yield put({ type: 'ADD_SUCCESS', payload: data.data.item })
    } catch (error) {
        console.error(error)
    }
}
export function* watchaddtofvt() {
    yield takeLatest('ADD_TO_FVT', addtofvt)
}

function* removefromfvt(data) {
    try {
        yield put({ type: 'REMOVE_SUCCESS', payload: data.data.item })
    } catch (error) {
        console.error(error)
    }
}
export function* watchremovefromfvt() {
    yield takeLatest('REMOVE_FVT', removefromfvt)
}

