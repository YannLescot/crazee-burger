import { useState } from "react";

export const useDisplaySuccessMessages = () => {
  const [wasProductAdded, setWasProductAdded] = useState(false);
  const [wasProductEdited, setWasProductEdited] = useState(false);
  const [registeredEdition, setRegisteredEdition] = useState(false);

  const displaySuccessAddMessage = () => {
    setWasProductAdded(true);
    setTimeout(() => {
      setWasProductAdded(false);
    }, 2000);
  };

  const displaySuccessEditMessage = () => {
    setWasProductEdited(true);
    setTimeout(() => {
      setWasProductEdited(false);
      setRegisteredEdition(false);
    }, 2000);
  };

  return {
    displaySuccessAddMessage,
    wasProductAdded,
    displaySuccessEditMessage,
    wasProductEdited,
    setWasProductEdited,
    registeredEdition,
    setRegisteredEdition,
  };
};
