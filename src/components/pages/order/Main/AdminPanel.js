import React from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../theme";
import Tab from "../../../reusable/Tab";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <div className="tabs">
        <Tab
          icon={<FiChevronDown />}
          label=""
          onClick={() => {}}
          isActive={false}
        />

        <Tab
          icon={<AiOutlinePlus />}
          label="Ajouter un produit"
          onClick={() => {}}
          isActive={false}
        />

        <Tab
          icon={<MdModeEditOutline />}
          label="Modifier un produit"
          onClick={() => {}}
          isActive={false}
        />
      </div>
      <div className="adminPanelBody">
        <span>Ajouter un produit</span>
      </div>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 4fr;
  width: 1400px;
  height: 293px;
  position: absolute;
  align-self: flex-end;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .tabs {
    margin-left: 71px;
    display: flex;
    align-items: center;

    .collapse {
      height: 100%;
      width: 60px;
    }
  }

  .adminPanelBody {
    background-color: ${theme.colors.white};
    width: 1365px;
    height: 207px;
    padding: 21px 17px;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
  }
`;
