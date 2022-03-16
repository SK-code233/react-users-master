import { createStore } from "redux";
import reducer from "./reducers/reducer";

const store = createStore( usersReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reactReduxFirebase(config),
      reduxFirestore(config)
    ));

export default store;