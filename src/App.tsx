import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePageParent from './HomePage/HomePageParent';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Graph from './Graph/Graph';
import AdminPane from './Admin/AdminPane';
import HistoryFetch from './util/fetch/HistoryFetch';


function App() {
  return (
    <Tabs>
        <TabList>
            <Tab>Home</Tab>
            <Tab>Graph</Tab>
            <Tab>Admin</Tab>
            <Tab>Debug</Tab>
        </TabList>
        <TabPanel>
            <HomePageParent/>
        </TabPanel>
        <TabPanel>
            <Graph />
        </TabPanel>
        <TabPanel>
            <AdminPane />
        </TabPanel>
        <TabPanel>
            <HistoryFetch/>
        </TabPanel>
    </Tabs>
  );
}

export default App;
