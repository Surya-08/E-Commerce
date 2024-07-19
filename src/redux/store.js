import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import storageSession from "redux-persist/lib/storage/session";
import ShippingReducer from "./reducers/shipping-reducer";
import cartReducer from "./reducers/cart-reducer";
import UserLoginReducer from "./reducers/user-login-reducer";

const persistConfig = {
  key: "root",
  storage: storageSession,
};
// const userPersistConfig = {
//   key: "UserLoginReducer",
//   storage: storageSession,
// };
const reducer = combineReducers({
  ShippingReducer,
  cartReducer,
  UserLoginReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
// const store = configureStore(persistedReducer);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
// Create a persisted version of the store
// const persistor = persistStore(store);

// export { store, persistor };
// const store = configureStore({ reducer });
