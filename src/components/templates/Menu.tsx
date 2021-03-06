import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { SlowMotionVideo } from '@material-ui/icons';
import Select from 'components/molecules/Select'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} style={{ height: 160, border: '1px solid gray' }}>
          {/* <Typography>{children}</Typography> */}
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  TabPanel: {

  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="アラーム表示" {...a11yProps(0)} />
          <Tab label="状態表示" {...a11yProps(1)} />
          <Tab label="ユーザー管理" {...a11yProps(2)} />
          <Tab label="処理ログ" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        アラーム表示
      </TabPanel>
      <TabPanel value={value} index={1}>
        状態表示
      </TabPanel>
      <TabPanel value={value} index={2}>
        ユーザー管理
      </TabPanel>
      <TabPanel value={value} index={3}>
        処理ログ
        <table style={{ width: '100%' }} >
          <tbody>
            <tr>
              <td style={{ width: '50%', border: '1px solid gray' }}><Select /></td>
              <td style={{ width: '50%', border: '1px solid gray' }}>結果</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </TabPanel>
    </div>
  );
}
