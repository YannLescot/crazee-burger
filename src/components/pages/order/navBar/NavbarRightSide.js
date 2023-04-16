import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import UserProfile from "./UserProfile";
import ToggleButton from "../../../reusable/ToggleButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminToast from "./AdminToast";
import OrderContext from "../../../../context/OrderContext";
import { focusTitleEditBox } from "../../../../utils/ref";

export default function RightSide() {
  const { isAdmin, setIsAdmin, titleEditBoxRef } = useContext(OrderContext);

  const displayToastNotification = async () => {
    !isAdmin &&
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  };

  const onToggle = async () => {
    await setIsAdmin(!isAdmin);
    await displayToastNotification();
    focusTitleEditBox(titleEditBoxRef);
  };

  return (
    <RightSideStyled>
      <AdminToast />
      <ToggleButton
        isChecked={isAdmin}
        onToggle={onToggle}
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
      />
      <UserProfile />
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  gap: ${theme.spacing.xl};
  padding-right: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
