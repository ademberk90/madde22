import React, { useContext } from 'react';
import { FilterContextType } from '../@types/filter';

export const FilterContext = React.createContext<FilterContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const FilterProvider: React.FC<Props> = ({ children }) => {
  const [filterText, setFilterText] = React.useState<string>("");

  const values = {
    filterText,
    setFilterText
  }

  return <FilterContext.Provider value={values}>{children}</FilterContext.Provider>;
};

const useFilter = () => useContext(FilterContext);


export {FilterProvider, useFilter};