// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// * change import on slice
// import { contactsReducer, filterReducer } from "./reducer";

import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

const persistConfig = {
  key: 'contacts',
  storage,
}

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);


// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });




// {
//   contacts: [],
//     filter: """"
// }

// const rootReducer = combineReducers({
//   contacts: cR,
//   filter: fR
// })

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts'] // only navigation will be persisted
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer)

