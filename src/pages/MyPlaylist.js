import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ActionMovies from '../components/playlistTabs/ActionMovies.js'
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: '80%',
      display: 'flex',
      justifyContent: 'center', 
    }}>
      <Box sx={{
        borderBottom: 1,
        borderColor: 'divider',
        width: '100%', 
      }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: 'red',
          },
        }}>
            <Tab label="Item One" {...a11yProps(0)} sx={{
            color:  'red'  // Set the color of the first tab to red
          }} />
          <Tab label="Item One" {...a11yProps(0)} sx={{
            color:  'red'  // Set the color of the first tab to red
          }} />
          <Tab label="Item One" {...a11yProps(0)} sx={{
            color:  'red'  // Set the color of the first tab to red
          }} />
          <Tab label="Item One" {...a11yProps(0)} sx={{
            color:  'red'  // Set the color of the first tab to red
          }} />
          <Tab label="Item One" {...a11yProps(0)} sx={{
            color:  'red'  // Set the color of the first tab to red
          }} />
          <Tab label="Item One" {...a11yProps(0)} sx={{
            color:  'red'  // Set the color of the first tab to red
          }} />
          <Tab label="Item One" {...a11yProps(0)} sx={{
            color:  'red'  // Set the color of the first tab to red
          }} />
          <Tab label="Item One" {...a11yProps(0)} sx={{
            color:  'red'  // Set the color of the first tab to red
          }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ActionMovies/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}