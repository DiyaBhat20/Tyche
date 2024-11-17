import React, { createContext, useState } from 'react';

export const DashboardContext =createContext();

export const DashboardProvider=({children})=>
{
    const [Res,setdata]=useState({});
    return(
        <DashboardContext.Provider value={{Res,setdata}}>
            {children}
        </DashboardContext.Provider>
    )
}