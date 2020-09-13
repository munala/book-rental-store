import React, { useReducer } from "react";
import "./App.css";
import Routes from "./routes";
import CustomerContext, {
  initialState as initialCustomerState
} from "./context/state/customer";
import ErrorContext, {
  initialState as initialErrorState
} from "./context/state/error";
import LoadingContext, {
  initialState as initialLoadingState
} from "./context/state/loading";
import customerReducer from "./context/reducers/customer";
import errorReducer from "./context/reducers/error";
import loadingReducer from "./context/reducers/loading";
import ErrorWrapper from "./wrappers/ErrorWrapper";
import LoadingWrapper from "./wrappers/LoadingWrapper";

const App = () => {
  const [customer, customerDispatch] = useReducer(
    customerReducer,
    initialCustomerState
  );

  const [error, errorDispatch] = useReducer(errorReducer, initialErrorState);

  const [loading, loadingDispatch] = useReducer(
    loadingReducer,
    initialLoadingState
  );

  return (
    <CustomerContext.Provider value={{ customer, customerDispatch }}>
      <ErrorContext.Provider value={{ error, errorDispatch }}>
        <LoadingContext.Provider value={{ loading, loadingDispatch }}>
          <div className="App container">
            <ErrorWrapper>
              <LoadingWrapper>
                <Routes />
              </LoadingWrapper>
            </ErrorWrapper>
          </div>
        </LoadingContext.Provider>
      </ErrorContext.Provider>
    </CustomerContext.Provider>
  );
};

export default App;
