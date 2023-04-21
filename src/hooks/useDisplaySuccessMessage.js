import { useState } from "react";

export const useDisplaySuccessMessage = () => {
  const [wasProductAdded, setWasProductAdded] = useState(false);

  const displaySuccessMessage = () => {
    setWasProductAdded(true);
    setTimeout(() => {
      setWasProductAdded(false);
    }, 2000);
  };

  return {
    displaySuccessMessage,
    wasProductAdded,
  };
};
