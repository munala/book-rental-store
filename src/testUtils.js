import React from "react";
import {
  createHistory,
  createMemorySource,
  LocationProvider
} from "@reach/router";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

export const dispatchMock = jest.fn();

export const customer = {
  id: 1,
  email: "munalaoliverngoitsi@gmail.com"
};

export const loading = false;
export const error = null;

export const books = [
  {
    id: 1,
    title: "Jurassic Park",
    author: "Michael Crichton",
    genre: "action"
  }
];

export const message = "message";

export const LoadingContext = React.createContext(loading);
export const ErrorContext = React.createContext(error);
export const CustomerContext = React.createContext(customer);
export const BooksContext = React.createContext(books);

export const renderWithRouter = (
  ui,
  { route = "/", history = createHistory(createMemorySource(route)) } = {}
) => {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    history
  };
};

export const LoadingProvider = ({ children }) => (
  <LoadingContext.Provider value={{ customer, loadingDispatch: dispatchMock }}>
    {children}
  </LoadingContext.Provider>
);

export const ErrorProvider = ({ children }) => (
  <ErrorContext.Provider value={{ errorDispatch: dispatchMock }}>
    {children}
  </ErrorContext.Provider>
);

export const CustomerProvider = ({ children }) => (
  <CustomerContext.Provider value={{ customerDispatch: dispatchMock }}>
    {children}
  </CustomerContext.Provider>
);

export const BooksProvider = ({ children }) => (
  <BooksContext.Provider value={{ booksDispatch: dispatchMock }}>
    {children}
  </BooksContext.Provider>
);

export const App = ({ children }) => (
  <LoadingProvider>
    <ErrorProvider>
      <CustomerProvider>
        <BooksProvider>{children}</BooksProvider>
      </CustomerProvider>
    </ErrorProvider>
  </LoadingProvider>
);

export const MockCustomerComponent = ({
  customer: mockCustomer,
  logout,
  onSubmit,
  loginMode,
  message: mockMessage,
  setMessage
}) => {
  return (
    <div>
      <button
        id="onSubmit"
        onClick={() => {
          onSubmit(customer);
        }}
      />
      <button
        id="logout"
        onClick={() => {
          logout(customer);
        }}
      />
      <button
        id="message"
        onClick={() => {
          setMessage(message);
        }}
      />
      {mockCustomer && <div id="customerId">{mockCustomer.id}</div>}
      <div id="loginMode">{loginMode}</div>
      <div id="message">{mockMessage}</div>
    </div>
  );
};

export const MockBooksComponent = ({ books: mockBooks, loadBooks, search }) => {
  return (
    <div>
      <button
        id="loadBooks"
        onClick={() => {
          loadBooks();
        }}
      />

      <button
        id="search"
        onClick={() => {
          search();
        }}
      />

      {books?.map(book => {
        return (
          <div id={book.id} key={book.id}>
            {book.id}
          </div>
        );
      })}
    </div>
  );
};
