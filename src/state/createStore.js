import { createStore } from 'redux';
import rootReducer from './index';

export default () => {
  const devtools =
    process.env.NODE_ENV === 'development' && window.devToolsExtension
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f;
  return createStore(rootReducer, devtools);
};


// import { createStore as reduxCreateStore } from 'redux'
// import { SIDE_DRAWER_TOGGLE } from '../actions/side-drawer-actions'

// const initialState = {
//   sideDrawerOpen: false,
// }

// const reducer = (state = initialState, action) => {
//   if (action.type === SIDE_DRAWER_TOGGLE) {
//     return Object.assign({}, state, {
//       sideDrawerOpen: !state.sideDrawerOpen,
//     })
//   }
//   return state
// }

// const createStore = () => reduxCreateStore(reducer, initialState)
// export default createStore
