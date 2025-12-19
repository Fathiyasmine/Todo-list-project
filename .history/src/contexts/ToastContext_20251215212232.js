import { createContext } from "react";
function showHideToast(message) {
  setOpen(true);
  setMessage(message);
  setTimeout(() => {
    setOpen(false);
  }, 2000);
}
const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  return (
    <ToastContext.Provider value={{ showHideToast }}>
      {children}
    </ToastContext.Provider>
  );
};
