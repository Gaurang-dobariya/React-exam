import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rooReducer from "./rootReducer";
import rootSaga from "./saga";

let sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rooReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;