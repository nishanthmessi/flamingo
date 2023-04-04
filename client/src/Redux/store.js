import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import postReducer from "../features/post"
import userReducer from "../features/user"
import profileReducer from "../features/profileId"
import authReducer from "../features/auth"

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
  profile: profileReducer,
  auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)
