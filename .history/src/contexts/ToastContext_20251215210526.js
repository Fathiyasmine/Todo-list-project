import { createContext } from "react";
function showHideToast(message) {
  setOpen(true);
  setMessage(message);
  setTimeout(() => {
    setOpen(false);
  }, 2000);
}
const ToastProvider=()=>{
    return(
        
    )
}
export const ToastContext = createContext({});
