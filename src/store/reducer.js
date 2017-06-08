/**
 * Created by changjin.zhang on 4/14/2017.
 */
import {combineReducers} from 'redux';
export const makeRootReducer=(asyncReducers)=>{
    return combineReducers({
        ...asyncReducers
    });
}

export const injectReducer=(store,{key,reducer})=>{
    store.asyncReducers[key]=reducer;
    console.log('injectReducer',store);
    store.replaceReducer(makeRootReducer(store.asyncReducers));
}
export default makeRootReducer;
