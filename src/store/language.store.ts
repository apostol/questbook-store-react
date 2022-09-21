// Manual: https://redux.js.org/tutorials/typescript-quick-start
// Concept: https://redux.js.org/tutorials/essentials/part-1-overview-concepts
import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";
import { LOCALES } from "~/i18n/locales";
import { RootState } from "./store";

export const LANGUAGE_CHANGE = "LANGUAGE_CHANGE";

export interface LanguageState {
  locale: string;
}
const initialState = (): LanguageState => {
  return {
    locale: LOCALES.ENGLISH,
  };
};
export const changeLanguage = createAction<string>(LANGUAGE_CHANGE);
export const languageReducer = createReducer(initialState, {
  [changeLanguage]: (
    state: LanguageState,
    action: PayloadAction<string, string>
  ) => {
    localStorage.setItem("locale", action.payload);
    state.locale = action.payload;
  },
});

export const selectLanguage = (state: RootState) => state.language;
