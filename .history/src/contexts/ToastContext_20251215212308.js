import { createContext } from "react";

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  function showHideToast(message) {
    setOpen(true);
    setMessage(message);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }
  return (
    <ToastContext.Provider value={{ showHideToast }}>
      {children}
    </ToastContext.Provider>
  );
};
