import { createContext } from "react";
function showHideToast(message) {
  setOpen(true);
  setMessage(message);
  setTimeout(() => {
    setOpen(false);
  }, 2000);
}
export const ToastContext = createContext({});
