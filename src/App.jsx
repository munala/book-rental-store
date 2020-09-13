import React, { useReducer } from "react";
import "./App.css";
import Routes from "./routes";
import CustomerContext, {
  initialState as initialCustomerState
} from "./context/state/customer";
import ErrorContext, {
  initialState as initialErrorState
} from "./context/state/customer";
import customerReducer from "./context/reducers/customer";
import errorReducer from "./context/reducers/error";

const App = () => {
  const [customer, customerDispatch] = useReducer(
    customerReducer,
    initialCustomerState
  );

  const [error, errorDispatch] = useReducer(errorReducer, initialErrorState);

  return (
    <CustomerContext.Provider value={{ customer, customerDispatch }}>
      <ErrorContext.Provider value={{ error, errorDispatch }}>
        <div className="App container">
          <Routes />
        </div>
      </ErrorContext.Provider>
    </CustomerContext.Provider>
  );
};

export default App;
