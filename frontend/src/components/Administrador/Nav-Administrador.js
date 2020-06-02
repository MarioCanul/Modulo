import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Footer from './Footer'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import BookIcon from '@material-ui/icons/Book';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { BrowserRouter as Router, Route , Link,} from 'react-router-dom';
import Cursos from './Menu-Administrador/OpcionCursos';
import Opcion2 from './Menu-Administrador/Opcion-Administrador2';
import Opcion3 from './Menu-Administrador/Opcion-Administrador3';
import Opcion4 from './Menu-Administrador/Opcion-Administrador4';
import Opcion5 from './Menu-Administrador/Opcion-Administrador5';
import Tooltip from '@material-ui/core/Tooltip';
// import '../App.css';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
}));
export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
           SISIT English.
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Tooltip title="Inicio" >
              <ListItem 
                button
                component={Link}
                to="/Administrador/Cursos"
              >
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary="Cursos" />
              </ListItem>
            </Tooltip>
          </List>
          <List>
            <Tooltip title="Buscador" >
              <ListItem 
                button
                component={Link}
                to="/Administrador/Buscador"
              >
                <ListItemIcon><SearchIcon /></ListItemIcon>
                <ListItemText primary="Buscador" />
              </ListItem>
            </Tooltip>
          </List>
          <List>
            <Tooltip title="Glosario" >
              <ListItem 
                button
                component={Link}
                to="/Administrador/Glosario"
              >
                <ListItemIcon><BookIcon /></ListItemIcon>
                <ListItemText primary="Glosario" />
              </ListItem>
            </Tooltip>
          </List>
          <List>
            <Tooltip title="Cuenta" >
              <ListItem 
                button
                component={Link}
                to="/Administrador/Mi_Cuenta"
              >
                <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                <ListItemText primary="Cuenta" />
              </ListItem>
            </Tooltip>
          </List>
          <List>
            <Tooltip title="Nosotros" >
              <ListItem 
                button
                component={Link}
                to="/Administrador/Nosotros"
              >
                <ListItemIcon><ContactSupportIcon /></ListItemIcon>
                <ListItemText primary="Nosotros" />
              </ListItem>
            </Tooltip>
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route path="/Administrador/Cursos" exact component={Cursos} />
            <Route path="/Administrador/Buscador" exact component={Opcion2} />
            <Route path="/Administrador/Glosario" exact component={Opcion3} />
            <Route path="/Administrador/Mi_Cuenta" exact component={Opcion4} />
            <Route path="/Administrador/Nosotros" exact component={Opcion5} />
            <div className="padd"></div>
            {/* <Footer /> */}
        </main>
      </div>
    </Router>
  );
}
