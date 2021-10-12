import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Paper } from '@mui/material';

export default function CategoryTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={0} className='container s sticky top0'>
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons="auto"
        variant="scrollable"
        >
        <Tab label="အားလုံး" />
        <Tab label="အကြော်" />
        <Tab label="အကင်" />
        <Tab label="ဟင်းရည်" />
        <Tab label="အသုတ်" />
        <Tab label="ပင်လယ်စာ" />
        <Tab label="ရိုးရာမုန့်" />
        <Tab label="ထိုင်းစာ" />
      </Tabs>
    </Paper>
  );
}