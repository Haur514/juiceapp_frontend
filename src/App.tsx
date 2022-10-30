import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePageParent from './HomePage/HomePageParent';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


function App() {
  return (
    <Tabs>
        <TabList>
            <Tab>Home</Tab>
            <Tab>Graph</Tab>
        </TabList>
        <TabPanel>
            <HomePageParent/>
        </TabPanel>
        <TabPanel>
            <h1>Graph Page</h1>
        </TabPanel>
    </Tabs>
  );
}

export default App;
