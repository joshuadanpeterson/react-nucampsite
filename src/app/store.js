import { logger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { commentsReducer } from "../features/comments/commentsSlice";
import { partnersReducer } from "../features/partners/partnersSlice";
import { promotionsReducer } from "../features/promotions/promotionsSlice";
import { campsitesReducer } from "../features/campsites/campsitesSlice.js";
import { useReducer } from "../features/user/userSlice";

export const store = configureStore({
	reducer: {
		campsites: campsitesReducer,
		comments: commentsReducer,
		partners: partnersReducer,
		promotions: promotionsReducer,
		user: useReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
