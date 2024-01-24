"use client";
import react, { createContext, use, useContext } from "react";
import React, { PropsWithChildren, useState } from "react"

const OpenCloseContext = createContext([false, (b) => { }] as [boolean, react.Dispatch<react.SetStateAction<boolean>>]);

export const OpenCloseListProvider = ({ children }: PropsWithChildren) => {
    const toggle = useState(false);
    return (
        <OpenCloseContext.Provider value={toggle }>
      
            {children}
            
        </OpenCloseContext.Provider>
    )
}
export const OpenCloseList = ({ children }: PropsWithChildren) => {
    const [isOpen] = useContext(OpenCloseContext);
    return (
        <ul id=":Rlj36H1:" aria-labelledby=":Rlj36:" className={`Box-sc-g0xbh4-0 ${isOpen ? 'enEvIH' : 'gMkIpo'}`}>
            {children}
        </ul>
    )
}


export const ToggleButton = (props: PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>>) => {
    const [isOpen,setIsOpen] = useContext(OpenCloseContext);
    return <button {...props } onClick={() => setIsOpen(old => !old)} />
}