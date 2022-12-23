

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './GraphPane.css';
import SellingBarGraph from './selling/SellingBarGraph';
import LineChart from './linechart/LineChart';



function GraphPane() {

const logState = state => {
    console.log("Toggled:", state)
}

  return (
    <Tabs>
        
        <TabList>
            <Tab>Selling Bar</Tab>
            <Tab>Line Chart</Tab>
        </TabList>
        <TabPanel>
            <SellingBarGraph/>
        </TabPanel>
        <TabPanel>
            <LineChart/>
        </TabPanel>
    </Tabs>
  );
}

export default GraphPane;
