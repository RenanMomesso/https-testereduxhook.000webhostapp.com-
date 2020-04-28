import React from 'react'
import {createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import Reducers from './reducers'

const persisConfig = {
    key:'root',
    storage,
    whitelist: ['usuario']
};

const pReducer = persistReducer(persisConfig, Reducers)

const store = createStore(pReducer)
const persistor = persistStore(store)

export {store, persistor};