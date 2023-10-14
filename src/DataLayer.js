import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
// Provides a data layer to push and pull states whenever needed
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext); 