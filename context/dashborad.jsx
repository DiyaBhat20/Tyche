import React, { createContext, useState } from 'react';

export const DashboardContext =createContext();

export const DashboardProvider=({children})=>
{
    const [data,setdata]=useState({});
    return(
        <DashboardContext.Provider value={{data,setdata}}>
            {children}
        </DashboardContext.Provider>
    )
}