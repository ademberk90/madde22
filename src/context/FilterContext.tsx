import React, { useContext } from 'react';
import { FilterContextType } from '../@types/filter';

export const FilterContext = React.createContext<FilterContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const FilterProvider: React.FC<Props> = ({ children }) => {
  const [filterText, setFilterText] = React.useState<string>("");
  const [selectedLocation, setSelectedLocation] = React.useState<string[]>([]);
  const [selectedDate, setSelectedDate] = React.useState<number[]>([]);
  const values = {
    filterText,
    setFilterText,
    selectedLocation,
    setSelectedLocation,
    selectedDate,
    setSelectedDate
  }

  return <FilterContext.Provider value={values}>{children}</FilterContext.Provider>;
};

const useFilter = () => useContext(FilterContext) as FilterContextType;


export {FilterProvider, useFilter};