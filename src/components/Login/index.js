import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {green} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LanguageRounded from '@material-ui/icons/LanguageRounded';

const innerTheme = createMuiTheme({
    palette: {
        secondary: {
            main: green[500],
        },
    },
});

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: '#fff',
        },
    },
    paper: {
        marginTop: '24px',
        marginBottom: '44px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        margin: '8px',
        width: '50%',
    },
    form: {
        width: '100%',
        marginTop: '8px',
    },
    submit: {
        margin: '24px 0px 16px',
    },
});

const options = [
    'فارسی',
    'English'
];

const ITEM_HEIGHT = 38;

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            notRobot: false,
            open: false,
            anchorEl: undefined
        };

    }

    openMenu = event => {
        this.setState({open: true, anchorEl: event.currentTarget});

    };
    closeMenu = () => {
        this.setState({open: false});
    };

    handleChangeCheckbox = () => {
        this.setState({
            notRobot: !this.state.notRobot
        })
    };

    handleChangeInput = name => event => {
        this.setState({
            [name]: event.target.value
        })
    };

    checkUsernameValidation = (username) => {
        return username.length > 0 && username.length < 4
    };

    checkPasswordLimitation = (password) => {
        return password.length > 0 && password.length < 5
    };

    render() {
        const {classes} = this.props;
        const {username, password, notRobot, open, anchorEl} = this.state;
        return (
            <Container component="main" maxWidth="xs" className="login-container">
                <CssBaseline/>
                <div className="language-container">
                    <IconButton
                        className="language-menu"
                        aria-label="glob"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={this.openMenu}
                    >
                        <LanguageRounded/>
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={this.closeMenu}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: 130,
                            },
                        }}
                    >
                        {options.map(option => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.closeMenu}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div className={classes.paper}>
                    <div className="logo">
                        <img className={classes.logo} src="./src/images/vplusenglish.82d118cd.png" alt="logo"/>
                    </div>
                    <Typography component="h1" variant="h4" className="Login-title">
                        Login
                    </Typography>
                    <Grid item>
                        Don't have an account?
                        <Link href="https://www.google.com/" variant="body2" className="underlinedLink">
                            {"Register"}
                        </Link>
                    </Grid>

                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={username}
                            onChange={this.handleChangeInput('username')}
                            error={this.checkUsernameValidation(username)}
                        />
                        {
                            this.checkUsernameValidation(username) &&
                            <div className="error-message">Username must have more than 4
                                characters</div>
                        }
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={this.handleChangeInput('password')}
                            error={this.checkPasswordLimitation(password)}
                        />
                        {
                            this.checkPasswordLimitation(password) &&
                            <div className="error-message">Password must have more than 5
                                characters</div>
                        }
                        <ThemeProvider theme={innerTheme}>
                            <FormControlLabel
                                control={
                                    <Checkbox value={notRobot} color="secondary"
                                              onChange={this.handleChangeCheckbox}/>
                                }
                                label="Remember me"
                            />
                            <Button
                                disabled={this.checkUsernameValidation(username) ||
                                this.checkPasswordLimitation(password) ||
                                !notRobot}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                                onClick={() => alert("you will login later..!")}
                            >
                                Sign In
                            </Button>
                        </ThemeProvider>
                        <Grid container>
                            <Grid item xs>
                                <Link href="https://www.google.com/" variant="body2" className="underlinedLink">
                                    Forgot Password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="https://www.google.com/" variant="body2" className="underlinedLink">
                                    {"Forgot Username?"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>

        );
    }
}

export default withStyles(styles)(Login);