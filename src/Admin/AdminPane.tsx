import React, { useState } from "react";
import backgroundImg from "./../image/admin-background.jpeg";
import PullDownMenu from "../component/PullDownMenu";
import UserAddPane from "./UserAdd/UserAddPane";
import UserDelete from "./UserDelete/UserDelete";
import ItemAddPane from "./ItemAdd/ItemAdd";
import SendSlack from "./SendSlack/SendSlack";
import UnpaidMember from "./UnpaidMember/UnpaidMember";
import ItemPane from "../HomePage/Item/ItemPane";
import ItemDelete from "./ItemDelete/ItemDelete";
import PassWordPane from "./PassWord/PassWordPane";
import styled from "styled-components";

function userAddClicked(is_user_add_pulldown_visible, setUserAddVisivility) {
  setUserAddVisivility(!is_user_add_pulldown_visible);
  alert(is_user_add_pulldown_visible);
}

function itemAddClicked() {
  alert("OK");
}

function slackSendClicked() {
  alert("OK");
}

function Admin() {
  const [passwordPaneVisible, setPasswordPaneVisible] = useState(true);

  return (
    <AdminPane>
      <PassWordPane
        visible={passwordPaneVisible}
        setVisible={setPasswordPaneVisible}
      />
      <TabPane></TabPane>
      <ContentPane
        style={{ visibility: passwordPaneVisible ? "hidden" : "visible" }}
      >
        <PullDownMenu summary="ユーザの追加" children={<UserAddPane />} />
        <PullDownMenu summary="ユーザの削除" children={<UserDelete />} />
        <PullDownMenu
          summary="アイテムの登録"
          onClick={itemAddClicked}
          children={<ItemAddPane />}
        />
        <PullDownMenu
          summary="アイテムの削除"
          onClick={itemAddClicked}
          children={<ItemDelete />}
        />
        <PullDownMenu
          summary="slackへの通知"
          onClick={slackSendClicked}
          children={<SendSlack />}
        />
        <PullDownMenu
          summary="金額未払い者の管理"
          onClick={slackSendClicked}
          children={<UnpaidMember />}
        />
      </ContentPane>
    </AdminPane>
  );
}

const AdminPane = styled.div`
  width: 100%;
  height: 100%;
`;

const TabPane = styled.div`
  position: fixed;
  top: 0;
  z-index: -9;
  background-color: white;
  width: 100%;
  height: 2em;
`;

const ContentPane = styled.div`
  overflow-y: scroll;
  background-color: gray;
  position: absolute;
  bottom: 0em;
  top: 3em;
`;

export default Admin;
