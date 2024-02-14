import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FormProfile from "./FormProfile";
import Family from "./Family/Family";
import FormContract from "./FormContract";
import WorkExp from "./WorkExp/WorkExp";
import EducationExp from "./EducationExp/EducationExp";
import FormEmployment from "./FormEmployment";
import Document from "./Document/Document";
import Salary from "./Salary/Salary";
import Settings from "./Settings/Settings";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
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
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          sx={{
            overflow: "hidden",
            maxWidth: "100vw",
          }}
        >
          <Tab label="ข้อมูลส่วนตัว" {...a11yProps(0)} />
          <Tab label="ข้อมูลติดต่อ" {...a11yProps(1)} />
          <Tab label="ครอบครัว" {...a11yProps(2)} />
          <Tab label="ประสบการณ์การทำงาน" {...a11yProps(3)} />
          <Tab label="การศึกษา" {...a11yProps(4)} />

          <Tab label="การจ้างงาน" {...a11yProps(5)} />
          <Tab label="เอกสาร" {...a11yProps(6)} />
          <Tab label="ข้อมูลเงินเดือน" {...a11yProps(7)} />
          <Tab label="ตั้งค่าบัญชี" {...a11yProps(8)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <FormProfile />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <FormContract />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Family />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <WorkExp />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <EducationExp />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <FormEmployment />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <Document />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <Salary />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
        <Settings />
      </CustomTabPanel>
    </Box>
  );
}
