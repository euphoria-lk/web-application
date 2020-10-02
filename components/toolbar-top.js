import React from "react";
import {
    AppBar,
    Container,
    Hidden,
    IconButton,
    InputBase,
    Link,
    List,
    ListItem,
    SwipeableDrawer,
    Toolbar,
    Typography
} from "@material-ui/core";
import {fade, makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu'
import styles from './topbar-top.module.css';

function ToolbarTop() {

    const [state, setState] = React.useState({
        drawerOpen: false
    });

    const useStyles = makeStyles((theme) => ({
            search: {
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: fade(theme.palette.common.black, 0.15),
                '&:hover': {
                    backgroundColor: fade(theme.palette.common.black, 0.25),
                },
                marginRight: theme.spacing(2),
                marginLeft: 0,
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                    marginLeft: theme.spacing(3),
                    width: 'auto',
                },
            },
            searchIcon: {
                padding: theme.spacing(0, 2),
                height: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            inputRoot: {
                // color: 'inherit',
                color: theme.palette.primary.main,
            },
            inputInput: {
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
                transition: theme.transitions.create('width'),
                width: '100%',
                [theme.breakpoints.up('md')]: {
                    width: '20ch',
                },
            }
        })
    );

    const classes = useStyles();

    //Logo icon change with screen size
    const renderLogo = (
        <>
            <Hidden implementation="css" smDown>
                <img src="/euphoria-v2-full.png" alt="Euphoria" className={styles.logo}/>
            </Hidden>
            <Hidden implementation="css" only={["xs", "md", "lg", "xl"]}>
                <img src="/euphoria-v2-text.png" alt="Euphoria" className={styles.logo}/>
            </Hidden>
            <Hidden implementation="css" smUp>
                <img src="/euphoria-v2-art.png" alt="Euphoria" className={styles.logo}/>
            </Hidden>
        </>
    );

    const searchBar = (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
            />
        </div>
    );

    const NavigationLinksList = () => {
        const inline = state.drawerOpen ? null : styles.navli;
        return (
            <Typography>
                <List>
                    <ListItem className={inline}>
                        <Link className={styles.MuiLink}>Counsellors</Link>
                    </ListItem>
                    <ListItem className={inline}>
                        <Link className={styles.MuiLink}>Appointments</Link>
                    </ListItem>
                </List>
            </Typography>
        );
    }

    const toggleDrawer = (open) => () => {
        setState({...state, drawerOpen: open})
    }

    const navigation = (
        <React.Fragment>
            <Hidden implementation="js" smDown>
                <NavigationLinksList/>
            </Hidden>
            {/*<Hidden implementation="js" only={["xs", "md", "lg", "xl"]}>*/}
            {/*    <img src="/euphoria-v2-text.png" alt="Euphoria" className={styles.logo}/>*/}
            {/*</Hidden>*/}
            <Hidden implementation="js" mdUp>
                <div className={styles.AppBarItemsRight}>
                    <IconButton onClick={toggleDrawer(true)} edge={"end"}>
                        <MenuIcon/>
                    </IconButton>
                    <SwipeableDrawer anchor='right' open={state.drawerOpen} onOpen={toggleDrawer(true)}
                                     onClose={toggleDrawer(false)} onClick={toggleDrawer(false)}
                                     onKeyDown={toggleDrawer(false)}>
                        <NavigationLinksList/>
                    </SwipeableDrawer>
                </div>
            </Hidden>
        </React.Fragment>
    );

    return (
        <AppBar position="sticky" classes={{root: styles.MuiAppBarRoot}}>
            <Container>
                <Toolbar>
                    {renderLogo}
                    {searchBar}
                    {navigation}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default ToolbarTop;
