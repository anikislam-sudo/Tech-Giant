import { configureStore } from "@reduxjs/toolkit";
import PcBuildSlice from "./Features/Pc-Build/PcBuildSlice";
import { api } from "./api/apiSlice";

export default configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        pcBuild: PcBuildSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  });
