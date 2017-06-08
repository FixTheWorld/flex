/**
 * Created by changjin.zhang on 4/14/2017.
 */
import {createStore,applyMiddleware,compose} from 'redux';
import {makeRootReducer} from './reducer';
import thunk from 'redux-thunk';
export default (initialState={})=>{
    const middleware=[thunk];
    const enhancers=[];
    return createStore(
        makeRootReducer(),
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );
}