import React, { useState } from "react";
import { Tabs } from "@sberbusiness/triplex/components/Tabs/Tabs";




export const TripTabs = () => {
const [selectedTabId, setSelectedTabId] = useState('tabs-tab-0');


const tabs = [
    {id: 'tabs-tab-0', label: 'Tab Name'},
    {id: 'tabs-tab-1', label: 'Tab Name'},
    {id: 'tabs-tab-2', label: 'Tab Name'},
    {id: 'tabs-tab-3', label: 'Tab Name'},
    {id: 'tabs-tab-4', label: 'Tab Name'},
    {id: 'tabs-tab-5', label: 'Tab Name'},
    {id: 'tabs-tab-6', label: 'Tab Name'},
    {id: 'tabs-tab-7', label: 'Tab Name'},
    {id: 'tabs-tab-8', label: 'Tab Name'},
    {id: 'tabs-tab-9', label: 'Tab Name'},
];
return (
<Tabs
    tabs={tabs}
    selectedTabId={selectedTabId}
    onSelectTab={(id) => setSelectedTabId(id)}
    buttonDropdownAttributes={{'aria-label': 'Другие вкладки'}}
/>
)
}