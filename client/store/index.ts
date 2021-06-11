// create a makeStore function
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { createStore } from "redux";
import {reducer, RootState} from "./reducers";

//?check
const makeStore: MakeStore<RootState> = (context: Context) =>
  createStore(reducer);

export const wrapper = createWrapper<RootState>(makeStore, {debug: true});
