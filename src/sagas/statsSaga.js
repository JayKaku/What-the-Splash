import {takeEvery, select, call, put, take, forEach, fork } from 'redux-saga/effects'
import { loadImageStats, setImageStats, setImageStatsError } from '../actions'
import { fetchImagesStats } from '../API'
import { IMAGES, STATS } from '../constants'

function* handleStateRequest(id){
    for(let i = 0; i<3; i++)
    {
        try {
            yield put(loadImageStats(id))
            const res = yield call(fetchImagesStats,id)
            yield put(setImageStats(id , res.downloads.total))
            return true
        } catch (err) {}
    }
    yield put(setImageStatsError(id))
}

export default function* watchStatsRequest() {
    while(true){
       const {images} = yield take(IMAGES.LOAD_SUCCESS)

       for(let i = 0; i< images.length; i++){
        yield fork(handleStateRequest, images[i].id)
       }

    }
}

//fork is very similar to call to handle the task but it helps us make parall calls 