// redux
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
// types
import { StateSchema } from "./StateSchema";

export function createReduxStore() {
  const rootReducers: ReducersMapObject<StateSchema> = {};

  const store = configureStore({
    reducer: rootReducers,
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
