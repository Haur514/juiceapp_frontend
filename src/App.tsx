import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AdminPane from './Admin/AdminPane';
import './App.css';
import ChatPane from './Chat/ChatPane';
import Chat from './Chat/ChatPane';
import { useGetElementProperty } from './customhook/useGetElementProperty';
import SellingBarGraph from './Graph/selling/SellingBarGraph';
import HomePageParent from './HomePage/HomePageParent';
import HistoryFetch from './util/fetch/HistoryFetch';
import { Toggle } from './component/Toggle';
import GraphPane from './Graph/GraphPane';



function App() {

const logState = state => {
    console.log("Toggled:", state)
}

  return (
    <Tabs>
        
        <TabList>
            <Tab>Home</Tab>
            <Tab>Graph</Tab>
            <Tab>Admin</Tab>
            <Tab>Chat</Tab>
        </TabList>
        <TabPanel>
            <HomePageParent/>
        </TabPanel>
        <TabPanel>
            <GraphPane/>
        </TabPanel>
        <TabPanel>
            <AdminPane />
        </TabPanel>
        <TabPanel>
            <ChatPane/>
        </TabPanel>
    </Tabs>
  );
}

export default App;
