import { toast } from "react-toastify";

export const useToast = () => {
  const displayAdminToast = async () => {
    toast.info("Mode admin activé", {
      theme: "dark",
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return {
    displayAdminToast,
  };
};
