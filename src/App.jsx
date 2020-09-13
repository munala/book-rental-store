import React, { useReducer } from "react";
import "./App.css";
import Routes from "./routes";
import CustomerContext, {
  initialState as initialCustomerState
} from "./context/state/customer";
import customerReducer from "./context/reducers/customer";

const App = () => {
  const [customer, customerDispatch] = useReducer(
    customerReducer,
    initialCustomerState
  );

  return (
    <CustomerContext.Provider value={{ customer, customerDispatch }}>
      <div className="App container">
        <Routes />
      </div>
    </CustomerContext.Provider>
  );
};

export default App;
