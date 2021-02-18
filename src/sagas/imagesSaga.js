import {takeEvery, select, call, put } from 'redux-saga/effects'
import {fetchImages} from '../API'
import {setImages, setError} from '../actions'
import { IMAGES } from '../constants'

export const getPage = state => state.nextPage;

//worker saga
export function* handleImageLoad(){
    try {
        // do api calling
        const page = yield select(getPage)
        const images = yield call(fetchImages, page)
        //console.log('at saga',images)
        yield put(setImages(images))
    } catch (error) {
        //dispatch error
        yield put(setError(error.toString()))
    }
}

// watcher saga it watches for that particular action
export default function* watchImagesLoad(){
    yield takeEvery(IMAGES.LOAD,handleImageLoad)
}

// watcher saga listens listens to an action and it'll invoke the worker saga