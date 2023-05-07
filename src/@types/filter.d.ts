export type FilterContextType = {
    filterText: string;
    setFilterText: (value: string) => void;
    selectedLocation : string[];
    setSelectedLocation: (value: string[]) => void;
    selectedDate : number[];
    setSelectedDate: (value: number[]) => void;
  };