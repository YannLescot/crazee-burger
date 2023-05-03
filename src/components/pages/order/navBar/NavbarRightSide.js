import { useContext } from "react";
import styled from "styled-components";
import UserProfile from "./UserProfile";
import ToggleButton from "../../../reusable/ToggleButton";
import "react-toastify/dist/ReactToastify.css";
import AdminToast from "./AdminToast";
import OrderContext from "../../../../context/OrderContext";
import { focusTitleEditBox } from "../../../../utils/ref";

//Ce nom de hook existe déjà dans react-toastify, mais là c'est le mien
import { useToast } from "../../../../hooks/useToast";

export default function RightSide() {
  const { isAdmin, setIsAdmin, titleEditBoxRef } = useContext(OrderContext);
  const { displayAdminToast } = useToast();

  const onToggle = async () => {
    await setIsAdmin(!isAdmin);
    !isAdmin && (await displayAdminToast());
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
  padding-right: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
