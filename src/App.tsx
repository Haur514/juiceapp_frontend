import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AdminPane from "./Admin/AdminPane";
import "./App.css";
import ChatPane from "./Chat/ChatPane";
import Chat from "./Chat/ChatPane";
import { useGetElementProperty } from "./customhook/useGetElementProperty";
import SellingBarGraph from "./Graph/selling/SellingBarGraph";
import HomePageParent from "./HomePage/HomePageParent";
import HistoryFetch from "./util/fetch/HistoryFetch";
import { Toggle } from "./component/Toggle";
import GraphPane from "./Graph/GraphPane";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartGantt,
  faHammer,
  faHouse,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const logState = (state) => {
    console.log("Toggled:", state);
  };

  const iconStyle: React.CSSProperties = { marginLeft: "0.4em" };

  return (
    <Tabs>
      <TabList>
        <Tab>
          Home
          <FontAwesomeIcon style={iconStyle} icon={faHouse} />
        </Tab>
        <Tab>
          Graph
          <FontAwesomeIcon style={iconStyle} icon={faChartGantt} />
        </Tab>
        <Tab>
          Admin
          <FontAwesomeIcon style={iconStyle} icon={faHammer} />
        </Tab>
        <Tab>Chat<FontAwesomeIcon style={iconStyle} icon={faMessage} /></Tab>
      </TabList>
      <TabPanel>
        <HomePageParent />
      </TabPanel>
      <TabPanel>
        <GraphPane />
      </TabPanel>
      <TabPanel>
        <AdminPane />
      </TabPanel>
      <TabPanel>
        <ChatPane />
      </TabPanel>
    </Tabs>
  );
}

export default App;
