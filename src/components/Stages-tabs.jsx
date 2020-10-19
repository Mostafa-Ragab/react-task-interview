import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles , useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Translate from 'react-translate-component';

import Tables from './tables/tables';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    color: "#000000" ,
    backgroundColor: "#FFFFFF",
    width: 1000,
    height: 600,
  },
  tabHead: {
    borderBottom: '1px solid #000000',
  }

}));

export default function StagesTabs({status}) {

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  return (
    <div className={classes.root }>

      <AppBar position="static" color="transparent" className="border-white shadow-none">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
            <Tab label ={<Translate content="LinkAll"/>}  {...a11yProps(0)}/>
            <Tab label={<Translate content="LinkUnderReview"/>} {...a11yProps(1)}/>
            <Tab label={<Translate content="LinkInitialAcceptance"/>} {...a11yProps(2)}/>
            <Tab label={<Translate content="LinkConditionalAcceptance"/>} {...a11yProps(3)}/>
            <Tab label={<Translate content="LinkRejected"/>} {...a11yProps(4)}/>
        </Tabs>
      </AppBar>

      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Tables status={''}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Tables status={'Under Review'}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Tables status={"Intial Acceptance"}/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Tables status={'Conditional Acceptance'}/>
        </TabPanel>
        <TabPanel value={value} index={4}dir={theme.direction} >
          <Tables status={'Rejected'}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}