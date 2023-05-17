import { useState } from "react";

export const useModal = () => {
  const [wasOrderConfirmed, setWasOrderConfirmed] = useState(false);

  const handleOrderConfirmation = (displayTime) => {
    setWasOrderConfirmed(true);
    setTimeout(() => {
      setWasOrderConfirmed(false);
    }, displayTime);
  };

  return {
    wasOrderConfirmed,
    handleOrderConfirmation,
  };
};
