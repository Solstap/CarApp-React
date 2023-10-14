import React, { createContext, useState } from "react";


// import cloneDeep from 'lodash.cloneDeep' <-- use if your objects get complex

export const UIContext = createContext({
    snackbar: {
        isOpen: false,
        message: "error",
        showMessage: () => {},
        hideDuration: 6000,
        onClose: () => {},
    }
});

export const UIProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("");

    const onClose = () => {
        setOpen(false);
        setMessage("");
        setSeverity("");
    }

    const showMessage = ({type, string}) => {
        setOpen(true);
        setMessage(string);
        setSeverity(type);
    }
    return (
        <UIContext.Provider
            value={{
                isOpen: open,
                hideDuration: 6000,
                onClose,
                severity,
                message,
                showMessage,
            }}
        >
            {children}
        </UIContext.Provider>
    );
}


