import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { useParams } from "react-router-dom";
import UserProfile from "./UserProfile";
import ToggleButton from "../../../reusable/ToggleButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NavbarRightSide() {
  const { username } = useParams();

  const [isAdmin, setIsAdmin] = useState(false);

  const displayToastNotification = () => {
    setIsAdmin(!isAdmin);

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

  return (
    <NavbarRightSideStyled>
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <ToggleButton
        isChecked={isAdmin}
        onToggle={displayToastNotification}
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
      />
      <UserProfile username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  gap: ${theme.spacing.xl};
  padding-right: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
