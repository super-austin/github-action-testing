//  External Dependencies
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { PERSIST } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/es/storage"; // persist to localStorage by default

//  Internal Dependencies
import { gameinfoSlice } from "./slices/GameInfo/GameInfoSlices";
import { userSlice } from "./slices/User/UserSlices";
import { gamefiSlice } from "./slices/GameFi/GameFiSlices";
import { gameProfileSlice } from "./slices/GameProfile/GameProfileSlices";
import { dropSlice } from "./slices/Drop/DropSlices";

const userPersistConfig = {
  key: "user",
  storage,
};

const reducer = combineReducers({
  gameinfo: gameinfoSlice.reducer,
  gamefi: gamefiSlice.reducer,
  gameprofile: gameProfileSlice.reducer,
  user: persistReducer(userPersistConfig, userSlice.reducer), // Persist user data only
  drop: dropSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
