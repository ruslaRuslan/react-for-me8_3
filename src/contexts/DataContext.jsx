import { createContext } from "react";

export const DataContext = createContext("");

const obj = {
  ad: "Ali",
  yas: 27,
};

const DataContextProvider = ({ children }) => {
  return (
    <>
      <DataContext.Provider value={obj}>{children}</DataContext.Provider>
    </>
  );
};

export default DataContextProvider;