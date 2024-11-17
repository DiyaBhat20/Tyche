import React, { createContext, useState } from 'react';

export const PortfolioContext =createContext();

export const PortfolioProvider=({children})=>
{
    const [res,setRes]=useState({});
    return(
        <PortfolioContext.Provider value={{res,setRes}}>
            {children}
        </PortfolioContext.Provider>
    )
}