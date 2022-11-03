import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePageParent from './HomePage/HomePageParent';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Graph from './Graph/Graph';
import Admin from './Admin/Admin';


function App() {
  return (
    <Tabs>
        <TabList>
            <Tab>Home</Tab>
            <Tab>Graph</Tab>
            <Tab>Admin</Tab>
        </TabList>
        <TabPanel>
            <HomePageParent/>
        </TabPanel>
        <TabPanel>
            <Graph />
        </TabPanel>
        <TabPanel>
            <Admin />
        </TabPanel>
    </Tabs>
  );
}

export default App;
