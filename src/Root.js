import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
// import reduxPromise from "redux-promise";
import reducers from "./reducers";
import asyncMiddlware from "./middlewares/async";
import stateValidator from "./middlewares/stateValidator";

const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(asyncMiddlware, stateValidator)
  );
  return <Provider store={store}>{children}</Provider>;
};
export default Root;
