import { Link, withRouter, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(() => ({
    toolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#00b3e6'
    },
    text: {
        color: "white",
        "&:hover": {
            textDecoration: "none",
            color: "white",
            fontStyle: "italic"
        },
        textDecoration: "none"
    },

}))

function Navbar({history}) {
    const classes = useStyles();
    const location = useLocation();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.text} component={Link} to="/blogs" variant="h5" >
                    Flatiron Blogs
                </Typography>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                    >
                    </IconButton> 
                    {
                        location.pathname === "/blogs/"
                        ? <Button onClick={() => history.push("/blogs/saved") } color="inherit">Saved Blogs</Button>
                        : <Button onClick={() => history.push("/blogs/") } color="inherit">All Blogs</Button>
                    }
            </Toolbar>
        </AppBar>
    )
}

export default withRouter(Navbar);