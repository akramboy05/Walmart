import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';


import reducer, {initialState} from "./context/reducer/reducer";
import { StateProvider } from "./context/stateprovider/StateProvider";
// import combineReducer from "./context/reducer/combineReducer";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["auth"],
  blacklist: []
}

// const persistedReducer = persistReducer(persistConfig, combineReducer)
// const store = createStore(persistedReducer)
// let persistor = persistStore(store)

// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <StateProvider reducer={reducer} initialState={initialState}>
      {/* <Provider store={store}> */}
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <App />
      </StateProvider>
          
        {/* </PersistGate> */}
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
   document.getElementById('root')
);
