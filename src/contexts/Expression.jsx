import { createContext, useContext, useState } from "react";

const Context = createContext()

export const ExpressionProvider = ({ children }) => {
    const [expression, setExpression] = useState({
        n1: "",
        n2: "",
        operation: ""
    });

    return (
        <Context.Provider value={{
            expression,
            setExpression
        }}>
            {children}
        </Context.Provider>
    )
}

export const useExpression = () => {
    const context = useContext(Context)

    if (context === undefined) {
        throw new Error("useExpression must be used inside a Expression")
    }

    return context;
}