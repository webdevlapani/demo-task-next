import {
  Box,
  List,
  ListItemButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";

import styles from "styles/TabPane.module.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <List
          style={{ padding: 0 }}
          component="nav"
          aria-label="secondary mailbox folder"
        >
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <Box className={styles.listboxWrapper}>
              <Box className={styles.listboxInner}>
                <Box className={styles.listBox} />
                <Typography variant="h6" className={styles.listHeading}>
                  Digital Ninja <br />
                  by{" "}
                  <Typography color="primary" sx={{ display: "inline-block" }}>
                    johndoe.near
                  </Typography>
                </Typography>
              </Box>
              <Box>
                <Image
                  src="/images/Arrow.svg"
                  width={20}
                  height={20}
                  alt="icon"
                />
              </Box>
            </Box>
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <Box className={styles.listboxWrapper}>
              <Box className={styles.listboxInner}>
                <Box className={styles.listBox} />
                <Typography variant="h6" className={styles.listHeading}>
                  Panda <br />
                  by{" "}
                  <Typography color="primary" sx={{ display: "inline-block" }}>
                    whitegoose497
                  </Typography>
                </Typography>
              </Box>
              <Box>
                <Image
                  src="/images/Arrow.svg"
                  width={20}
                  height={20}
                  alt="icon"
                />
              </Box>
            </Box>
          </ListItemButton>
        </List>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const TabPane = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "secondary",
              height: "3px",
            },
          }}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab
            className={styles.tabList}
            label="Collectibles"
            {...a11yProps(0)}
          />
          <Tab
            className={styles.tabList}
            label="Transactions"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}></TabPanel>

      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
};

export default TabPane;
