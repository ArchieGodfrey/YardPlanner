import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import { createFilter, createBlacklistFilter } from 'redux-persist-transform-filter';

import { reducer as servicesReducer } from './services/reducer';
import { updateNotification as sessionUpdateNotification } from './services/session/actions';

const rootReducer = combineReducers({
  services: servicesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const persistedReducer = persistReducer(persistConfig, rootReducer);

const saveAndLoadSessionFilter = createFilter(
  'services',
  ['session'],
  ['session'],
);

const blacklistFilter = createBlacklistFilter();

export const store = createStore(
  persistedReducer,
  enhancer,
  // composeWithDevTools()
);

global.stores = store;

export const persistor = persistStore(store);

export const updateNotification = () => {
  persistStore(store, {
    storage: AsyncStorage,
    blacklist: [],
    transforms: [saveAndLoadSessionFilter, blacklistFilter],
  }, () => store.dispatch(sessionUpdateNotification(true)));
};

export const updateNotificationRequest = () => {
  persistStore(store, {
    storage: AsyncStorage,
    blacklist: [],
    transforms: [saveAndLoadSessionFilter, blacklistFilter],
  }, () => store.dispatch(updateNotificationRequest(false)));
};
