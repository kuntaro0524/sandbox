import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { CheckTable } from "../atoms/CheckTable";
import { Compo1 } from "../atoms/Compo1";

export const TabTable = () => {
  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <CheckTable />
        </TabPanel>
        <TabPanel>
          <Compo1 />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
