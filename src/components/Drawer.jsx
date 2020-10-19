import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PeopleIcon from '@material-ui/icons/People';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import counterpart from "counterpart";
import Translate from 'react-translate-component';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {

  const t = (o) => <Translate content={o}/>

  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    if(counterpart.getLocale()==='en')
      {
        anchor='right';
        setLangopen('right')
      }
     else
      {
       anchor='left';
       setLangopen('left')
      }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      
        {[t('contentadmission')].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{ <div><ArrowForwardIosIcon /> <AccountCircleIcon color="primary" fontSize="large" className="mr-3"/></div>}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[t('contentApplications'), t('contentDates'), t('contentSignOut')].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
                {
                index === 0 ? <PeopleIcon color="primary"/> : index === 1 ? <EventNoteIcon color="primary"/> : <ExitToAppIcon color="primary"/>
                }
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
const [Langopen, setLangopen] = React.useState('right');
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={Langopen}>
            <Button onClick={toggleDrawer(Langopen, true)} className="btn btn-outline-light bg-transparent">
                <AccountCircleIcon color="primary" fontSize="large"/>
            </Button>
          <SwipeableDrawer
            anchor={Langopen}
            open={state[Langopen]}
            onClose={toggleDrawer(Langopen, false)}
            onOpen={toggleDrawer(Langopen, true)}
          >
            {list(Langopen)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
// const [Langopen, setLangopen] = React.useState('right');
//   return (
//     <div>
//       <Button onClick={toggleDrawer(Langopen, true)} className="btn btn-outline-light bg-transparent">
//         {/* <img src="/images/account.png" width="50" height="50" alt="account"/> */}
//         <AccountCircleIcon color="primary" fontSize="large" width="50" height="50" alt="account"/>
//       </Button>
//       <Drawer anchor={Langopen} open={state[Langopen]} onClose={toggleDrawer(Langopen, false)}>
//         {list(Langopen)}
//       </Drawer>
//     </div>
//   );

