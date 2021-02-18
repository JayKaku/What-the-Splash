import { applyMiddleware, createStore , compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import  rootSaga from '../sagas'
import rootReducer from '../reducers'

const configureStore =()=>{
    // create the saga middleware
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;